using ProductManagement.Api.Models;

namespace ProductManagement.Api.Services
{
    public interface IProductService
    {
        Task<List<ProductModel>> GetAllAsync();
        Task<ProductModel?> GetByIdAsync(int id);
        Task<ProductModel> CreateAsync(string productCode);
        Task<bool> DeleteAsync(int id);
    }
}
