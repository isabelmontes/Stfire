using Microsoft.AspNetCore.Mvc;
using ApiSTFireHub.Models;
using System.Linq;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly STFireHubContext _context;

    public UsersController(STFireHubContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            var users = _context.User.ToList(); 
            return Ok(users);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Database connection failed: {ex.Message}");
        }
    }
}
