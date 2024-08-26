using Microsoft.AspNetCore.Mvc;
using ApiSTFireHub.Models;
using System.Linq;

[Route("api/[controller]")]
[ApiController]
public class SeriesController : ControllerBase
{
    private readonly STFireHubContext _context;

    public SeriesController(STFireHubContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            var series = _context.Serie.ToList();  // Asumiendo que la tabla se llama "Series"
            return Ok(series);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Database connection failed: {ex.Message}");
        }
    }
}
