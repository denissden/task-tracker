using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Net.Http;
using System.Net;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("task")]
    public class TaskController : ControllerBase
    {
        public readonly PostgreSQL.TaskContext _context;

        public TaskController(PostgreSQL.TaskContext context){
            _context = context;
        }

        [HttpGet]
        [Route("all")]
        public IEnumerable<PostgreSQL.Task> AllTasks(){
            return _context.Tasks.ToList();
        }

        [HttpDelete]
        [Route("{id?}")]
        public ActionResult DeleteTask(int id){
            var taskToDelete = new PostgreSQL.Task { id = id };
            _context.Tasks.Attach(taskToDelete);
            _context.Tasks.Remove(taskToDelete);
            _context.SaveChanges();
            return Ok();
        }

        [HttpPut]
        public ActionResult<PostgreSQL.Task> UpdateTask(PostgreSQL.Task task){
            var entity = _context.Tasks.Find(task.id);
            if (entity == null){
                return BadRequest();
            }
            _context.Entry(entity).CurrentValues.SetValues(task);
            _context.SaveChanges();
            return task;            
        }

        [HttpPost]
        public ActionResult<PostgreSQL.Task> AddTask(PostgreSQL.Task task){
            task.id = null;
            _context.Tasks.Add(task);
            _context.SaveChanges();
            return task;         
        }
    }
}