USE [STFire]
GO
/****** Object:  Table [dbo].[Favorites]   ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Favorites](
	[_id] [int] IDENTITY(1,1) NOT NULL,
	[_idUser] [int] NOT NULL,
	[id_Movie] [int] NULL,
	[id_Serie] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Genre]    ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Genre](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Movie]   ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movie](
	[_id] [int] NOT NULL,
	[name] [nvarchar](100) NOT NULL,
	[cover] [nvarchar](100) NULL,
	[id_genre] [int] NULL,
	[director] [nvarchar](100) NULL,
	[duration] [float] NULL,
	[year] [int] NULL,
	[url] [nvarchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Serie]     ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Serie](
	[_id] [int] IDENTITY(1,1) NOT NULL,
	[cover] [nvarchar](100) NULL,
	[name] [nvarchar](100) NOT NULL,
	[id_genre] [int] NULL,
	[director] [nvarchar](100) NULL,
	[year] [int] NULL,
	[url] [nvarchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]   ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[_id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NOT NULL,
	[email] [nvarchar](100) NOT NULL,
	[password] [nvarchar](100) NOT NULL,
	[country] [nvarchar](100) NOT NULL,
	[Phone] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Favorites]  WITH CHECK ADD FOREIGN KEY([_idUser])
REFERENCES [dbo].[Users] ([_id])
GO
ALTER TABLE [dbo].[Favorites]  WITH CHECK ADD FOREIGN KEY([id_Movie])
REFERENCES [dbo].[Movie] ([_id])
GO
ALTER TABLE [dbo].[Favorites]  WITH CHECK ADD FOREIGN KEY([id_Serie])
REFERENCES [dbo].[Serie] ([_id])
GO
ALTER TABLE [dbo].[Movie]  WITH CHECK ADD FOREIGN KEY([id_genre])
REFERENCES [dbo].[Genre] ([id])
GO
ALTER TABLE [dbo].[Serie]  WITH CHECK ADD FOREIGN KEY([id_genre])
REFERENCES [dbo].[Genre] ([id])
GO
/****** Object:  StoredProcedure [dbo].[isspp_InsertMovies]    ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Crear el procedimiento almacenado para insertar registros en la tabla Movie
CREATE PROCEDURE [dbo].[isspp_InsertMovies]
AS
BEGIN
    -- Insertar el primer registro
    INSERT INTO Movie (name, director, id_genre, year, duration, url, cover)
    VALUES ('Spirit: El corcel indomable', 'Kelly Asbury', '1', 2002, 120, 'http://localhost:3000/algoaqui.mp3', 'https://upload.wikimedia.org/wikipedia/en/3/3b/Spirit_Stallion_of_the_Cimarron_poster.jpg');

    -- Insertar el segundo registro
    INSERT INTO Movie (name, director, id_genre, year, duration, url, cover)
    VALUES ('Eternal Sunshine of spotless mind', 'Michel Gondry', '2', 2004, 120, 'http://localhost:3000/algoaqui.mp3', 'http://aureavisurarevista.fad.unam.mx/wp-content/uploads/2017/10/Eternal_Sunshine_of_the_Spotless_Mind-620x930.jpg');
END;




GO
