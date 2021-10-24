using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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
    }
}