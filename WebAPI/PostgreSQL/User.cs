namespace WebAPI.PostgreSQL
{
    public partial class User
    {
        public int? id { get; set; }
        public string username { get; set; }
        public string password { get; set; }
    }
}