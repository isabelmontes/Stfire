using Microsoft.AspNetCore.Mvc;
using ApiSTFireHub.Models;
using System.Linq;

[Route("api/[controller]")]
[ApiController]
public class FavoriteMoviesController : ControllerBase
{
    private readonly STFireHubContext _context;

    public FavoriteMoviesController(STFireHubContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            var favoriteMovies = _context.FavoriteMovies.ToList();  // Asegúrate de que el DbSet esté bien configurado
            return Ok(favoriteMovies);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Database connection failed: {ex.Message}");
        }
    }
}
