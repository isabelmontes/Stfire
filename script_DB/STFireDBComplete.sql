-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: stfirebd
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `favoritemovies`
--

DROP TABLE IF EXISTS `favoritemovies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritemovies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_User` int(11) NOT NULL,
  `id_Movie` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_User` (`id_User`),
  KEY `id_Movie` (`id_Movie`),
  CONSTRAINT `favoritemovies_ibfk_1` FOREIGN KEY (`id_User`) REFERENCES `user` (`id`),
  CONSTRAINT `favoritemovies_ibfk_2` FOREIGN KEY (`id_Movie`) REFERENCES `movie` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritemovies`
--

LOCK TABLES `favoritemovies` WRITE;
/*!40000 ALTER TABLE `favoritemovies` DISABLE KEYS */;
INSERT INTO `favoritemovies` VALUES (6,1,2);
/*!40000 ALTER TABLE `favoritemovies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoriteseries`
--

DROP TABLE IF EXISTS `favoriteseries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoriteseries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_User` int(11) NOT NULL,
  `id_Serie` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_User` (`id_User`),
  KEY `id_Serie` (`id_Serie`),
  CONSTRAINT `favoriteseries_ibfk_1` FOREIGN KEY (`id_User`) REFERENCES `user` (`id`),
  CONSTRAINT `favoriteseries_ibfk_2` FOREIGN KEY (`id_Serie`) REFERENCES `serie` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoriteseries`
--

LOCK TABLES `favoriteseries` WRITE;
/*!40000 ALTER TABLE `favoriteseries` DISABLE KEYS */;
INSERT INTO `favoriteseries` VALUES (1,1,1);
/*!40000 ALTER TABLE `favoriteseries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Science Fiction'),(2,'Terror'),(3,'Fantasía'),(4,'Romance'),(5,'Comedia Romántica'),(6,'Infantil'),(7,'Ciencia Ficción'),(8,'Drama Histórico');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `id_genre` int(11) NOT NULL,
  `director` varchar(100) NOT NULL,
  `duration` float NOT NULL,
  `year` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` varchar(900) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_genre` (`id_genre`),
  CONSTRAINT `movie_ibfk_1` FOREIGN KEY (`id_genre`) REFERENCES `genre` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (2,'Inception','https://image-url.com/inception.jpg',1,'Christopher Nolan',2.5,2010,'https://inception-movie-url.com','A mind-bending thriller where dream invasion is possible.'),(3,'Inception','https://image-url.com/inception.jpg',1,'Christopher Nolan',2.5,2010,'https://inception-movie-url.com','A mind-bending thriller where dream invasion is possible.'),(4,'Líbranos del Mal','https://image-url.com/libranos-del-mal.jpg',2,'Scott Derrickson',1.58,2014,'https://libranosdelmal-url.com','Un oficial de policía de Nueva York investiga una serie de crímenes perturbadores. Se terminara enfrentdando a sus peores pesadillas de un pasado que busco ocultar'),(5,'Harry Potter y el Prisionero de Azkaban','https://image-url.com/harry-potter-3.jpg',3,'Alfonso Cuarón',2.22,2004,'https://harrypotter-url.com','Harry Potter en una tercera entrega descubre en sus aventuras secretos de su pasado que no espera mientras el peligro del  el prisionero de Azkaban parece acecharle'),(6,'Eterno Resplandor de una Mente sin Recuerdos','https://image-url.com/eternal-sunshine.jpg',4,'Michel Gondry',1.48,2004,'https://eternalsunshine-url.com','Dos enamordos intentan borrar sus recuerdos el uno del otro. ¿Se puede borrar una historia de amor por el bien de los dos?'),(7,'Las Primeras 50 Citas','https://image-url.com/50-first-dates.jpg',5,'Peter Segal',1.39,2004,'https://50firstdates-url.com','Un hombre trata de enamorar a la misma mujer cada día debido a su pérdida de memoria a corto plazo cada día'),(8,'El Gato con Botas: El Último Deseo','https://image-url.com/gato-con-botas.jpg',6,'Joel Crawford',1.42,2022,'https://gatoconbotas-url.com','El Gato con Botas se enfrenta a un nuevo desafío para restaurar su vida, que despues de todo, es la unica que le queda'),(9,'Alien','https://image-url.com/alien.jpg',7,'Ridley Scott',1.57,1979,'https://alien-url.com','Un grupo de exploradores espaciales se enfrenta a una forma de vida alienígena letal y sortea el día a día llenos de peligros');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `serie`
--

DROP TABLE IF EXISTS `serie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `serie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `id_genre` int(11) NOT NULL,
  `director` varchar(100) NOT NULL,
  `year` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` varchar(900) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_genre` (`id_genre`),
  CONSTRAINT `serie_ibfk_1` FOREIGN KEY (`id_genre`) REFERENCES `genre` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serie`
--

LOCK TABLES `serie` WRITE;
/*!40000 ALTER TABLE `serie` DISABLE KEYS */;
INSERT INTO `serie` VALUES (1,'Breaking Bad','https://image-url.com/breakingbad.jpg',1,'Vince Gilligan',2008,'https://breakingbad-url.com','A high school chemistry teacher turned methamphetamine kingpin.'),(2,'Stranger Things','https://image-url.com/stranger-things.jpg',2,'The Duffer Brothers',2016,'https://strangerthings-url.com','Un grupo de niños descubre misteriosos eventos en su pequeña ciudad, incluyendo la desaparición de su amigo.'),(3,'Game of Thrones','https://image-url.com/game-of-thrones.jpg',3,'David Benioff y D. B. Weiss',2011,'https://gameofthrones-url.com','Nobles familias luchan por el control del Trono de Hierro en el continente de Westeros.'),(4,'Outlander','https://image-url.com/outlander.jpg',4,'Ronald D. Moore',2014,'https://outlander-url.com','Una mujer de la Segunda Guerra Mundial viaja en el tiempo hasta el siglo XVIII en Escocia.'),(5,'How I Met Your Mother','https://image-url.com/how-i-met-your-mother.jpg',5,'Pamela Fryman',2005,'https://howimetyourmother-url.com','Un hombre cuenta a sus hijos cómo conoció a su madre, mientras recuerda aventuras con sus amigos.'),(6,'Peppa Pig','https://image-url.com/peppa-pig.jpg',6,'Neville Astley, Mark Baker',2004,'https://peppapig-url.com','Peppa, una cerdita, vive aventuras con su familia y amigos.'),(7,'The Expanse','https://image-url.com/the-expanse.jpg',7,'Mark Fergus, Hawk Ostby',2015,'https://theexpanse-url.com','Un detective y un capitán de nave descubren una vasta conspiración en el sistema solar.'),(8,'The Crown','https://image-url.com/the-crown.jpg',8,'Peter Morgan',2016,'https://thecrown-url.com','La vida de la Reina Isabel II y los eventos que marcaron el siglo XX.');
/*!40000 ALTER TABLE `serie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `phone` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'John Doe','johndoe@example.com','password123','USA',1234567890);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'stfirebd'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-25 20:38:02
