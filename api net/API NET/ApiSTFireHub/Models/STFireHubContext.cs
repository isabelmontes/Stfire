using Microsoft.EntityFrameworkCore;
using ApiSTFireHub.Models;

namespace ApiSTFireHub.Models
{
    public class STFireHubContext : DbContext
    {
        public STFireHubContext(DbContextOptions<STFireHubContext> options)
            : base(options)
        {
        }


        public DbSet<UserModel> User { get; set; } = null!;
        public DbSet<GenreModel> Genre { get; set; } = null!;
        public DbSet<MovieModel> Movie { get; set; } = null!;
        public DbSet<SerieModel> Serie { get; set; } = null!;
        public DbSet<FavoriteMovieModel> FavoriteMovies { get; set; } = null!;
        public DbSet<FavoriteSerieModel> FavoriteSeries { get; set; } = null!;
        public DbSet<TodoItem> TodoItems { get; set; } = null!;
    }
}
