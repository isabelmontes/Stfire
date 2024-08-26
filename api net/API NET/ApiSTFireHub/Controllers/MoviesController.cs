using Microsoft.AspNetCore.Mvc;
using ApiSTFireHub.Models;
using System.Linq;

[Route("api/[controller]")]
[ApiController]
public class MoviesController : ControllerBase
{
    private readonly STFireHubContext _context;

    public MoviesController(STFireHubContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            // Obtener todos los registros de la tabla Movies
            var movies = _context.Movie.ToList();
            return Ok(movies);
        }
        catch (Exception ex)
        {
            // Manejo de errores
            return StatusCode(500, $"Database connection failed: {ex.Message}");
        }
    }
}
