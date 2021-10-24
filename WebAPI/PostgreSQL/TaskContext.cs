using Microsoft.EntityFrameworkCore;


namespace WebAPI.PostgreSQL
{
    public class TaskContext : DbContext
    {   
        public DbSet<PostgreSQL.Task> Tasks {get; set;}

        public TaskContext()
        {
        }

        public TaskContext(DbContextOptions<TaskContext> options) : base(options)
        {
        }

        protected override void OnModelCreating( ModelBuilder modelBuilder){
            modelBuilder.HasAnnotation("Relational:Collation", "en_US.utf8");

            modelBuilder.Entity<Task>(entity =>
            {
                entity.HasKey(e => e.id)
                    .HasName("task_pkey");

                entity.ToTable("task");

                entity.Property(e => e.id).HasColumnName("id_task");

                entity.Property(e => e.date)
                    .HasColumnType("date")
                    .HasColumnName("task_date");

                entity.Property(e => e.reminder).HasColumnName("task_reminder");

                entity.Property(e => e.text)
                    .IsRequired()
                    .HasColumnType("character varying")
                    .HasColumnName("task_text");
            });

        }
    }
}