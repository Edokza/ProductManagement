using Microsoft.EntityFrameworkCore;
using ProductManagement.Api.Models;

namespace ProductManagement.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<ProductModel> Products => Set<ProductModel>();
    }
}
