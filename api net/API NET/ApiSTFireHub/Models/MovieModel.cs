using System.ComponentModel.DataAnnotations.Schema;
namespace ApiSTFireHub.Models
{
      [Table("Movie")]
    public class MovieModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Cover { get; set; }
        public int Id_Genre { get; set; }
        public string Director { get; set; }
        public float Duration { get; set; }
        public int Year { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
    }
}
