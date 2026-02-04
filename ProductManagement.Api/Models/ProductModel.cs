using System.ComponentModel.DataAnnotations;

namespace ProductManagement.Api.Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 30)]
        public string ProductCode { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }
}
