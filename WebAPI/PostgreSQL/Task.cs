using System;
using System.Collections.Generic;

#nullable disable

namespace WebAPI.PostgreSQL
{
    public partial class Task
    {
        public int? id { get; set; }
        public string text { get; set; }
        public DateTime date { get; set; }
        public bool reminder { get; set; }
    }
}
