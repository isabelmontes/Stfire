namespace ApiSTFireHub.Models;
using Microsoft.EntityFrameworkCore;

public class TodoItem
{
    public long Id { get; set; }
    public string? Name { get; set; }
    public bool IsComplete { get; set; }
}
