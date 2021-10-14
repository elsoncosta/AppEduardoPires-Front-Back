using DevIO.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace DevIO.Data
{
    public class InfraContextFactory : IDesignTimeDbContextFactory<MeuDbContext>
    {
        public MeuDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<MeuDbContext>();
            //optionsBuilder.UseSqlite("Data Source=blog.db");
            return new MeuDbContext(optionsBuilder.Options);
        }
    }
}
