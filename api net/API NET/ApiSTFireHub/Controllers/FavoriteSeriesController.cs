using Microsoft.AspNetCore.Mvc;
using ApiSTFireHub.Models;
using System.Linq;

[Route("api/[controller]")]
[ApiController]
public class FavoriteSeriesController : ControllerBase
{
    private readonly STFireHubContext _context;

    public FavoriteSeriesController(STFireHubContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            var favoriteSeries = _context.FavoriteSeries.ToList();  // Asegúrate de que el DbSet esté bien configurado
            return Ok(favoriteSeries);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Database connection failed: {ex.Message}");
        }
    }
}
