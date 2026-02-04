using Microsoft.EntityFrameworkCore;
using ProductManagement.Api.Models;
using System.Text.RegularExpressions;

namespace ProductManagement.Api.Services
{
    public class ProductService : IProductService
    {
        private readonly Data.AppDbContext _context;

        public ProductService(Data.AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<ProductModel>> GetAllAsync()
        {
            return await _context.Products.OrderByDescending(p => p.CreatedAt).ToListAsync();
        }

        public async Task<ProductModel?> GetByIdAsync(int id)
        {
            return await _context.Products.FindAsync(id);
        }

        public async Task<ProductModel> CreateAsync(string productCode)
        {
            var cleanedCode = productCode.Replace("-", "");

            var pattern = @"^[A-Z0-9]{30}$";

            if (!Regex.IsMatch(productCode, pattern))
            {
                throw new Exception("Invalid product code format.");
            }

            var exists = await _context.Products
                .AnyAsync(p => p.ProductCode == productCode);

            if (exists)
            {
                throw new Exception("Product code already exists.");
            }

            var product = new ProductModel
            {
                ProductCode = productCode,
                CreatedAt = DateTime.UtcNow
            };

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return product;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return false;
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
