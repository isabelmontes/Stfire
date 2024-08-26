using Microsoft.AspNetCore.Mvc;
using ApiSTFireHub.Models;
using System.Linq;

[Route("api/[controller]")]
[ApiController]
public class GenresController : ControllerBase
{
    private readonly STFireHubContext _context;

    public GenresController(STFireHubContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            var genres = _context.Genre.ToList();  // Asumiendo que la tabla se llama "Genres"
            return Ok(genres);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Database connection failed: {ex.Message}");
        }
    }
}
