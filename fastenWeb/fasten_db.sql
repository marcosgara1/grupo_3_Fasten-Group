-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: fasten_db
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clasificacion`
--

DROP TABLE IF EXISTS `clasificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clasificacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clasificacion`
--

LOCK TABLES `clasificacion` WRITE;
/*!40000 ALTER TABLE `clasificacion` DISABLE KEYS */;
INSERT INTO `clasificacion` VALUES (1,'Trabajos con tensi├│n'),(2,'Seguridad'),(3,'Aparatos de testeo y medici├│n');
/*!40000 ALTER TABLE `clasificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `foto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'','Vader','darth@gmail.com','$2b$04$cJGfIII6kYv4ZR4.rv51vehPSi6JZFNo0ivaiH',''),(2,'','Norris','chucl@gmail.com','$2b$04$goSilsBXSIi2zoLoZ7qqLOP9ex5xRt0JIIkPwq',''),(3,'Hernan Jorge','Crespo','crespo@gmail.com','$2b$04$gFMoLPSK7C9JkgJEzQIZZuj/xNFYpprpghuznFy.aFa4YoPam7nVe',''),(4,'John','Rambo','rambo@gmail.com','$2b$04$.uZPs19evt.97OReUn1WC.zd46XZzdGhPDcZdTdA.yJLtBJw2UPuq',''),(5,'agustin','graziani','agustin@gmail.com','$2b$04$rI5FweKuWqE5lMcFUk1/Ouk/JA/s9C/RqM8m9lw2MfrlL7FOTR/oK',''),(6,'agustin','agustin','agustin@mail.com','$2b$04$7lamrJ5CYbpOGt0leGYDW.Jj9CAIUo5UcpXl2aYmdtPUsaOfzUA6K','public\\img\\users\\foto-1594640571447.jpg'),(7,'Morty','Smith','morty@gmail.com','$2b$04$g0UgpNtIRdy7iR5goUcfxe2IyvK3MqONJgHi5FPepXZfiErGgPqnq',''),(8,'Rick','Sanchez','rick@gmail.com','$2b$04$ovErmQw4vWeVBsI.055Og.CV6fZnN7ZZ5HXXg6umM1q0zj4OTN662','foto-1594641461128.jpg'),(9,'Rainier','Wolfcastle','mcbain@hotmail.com','$2b$04$gPdjpWAg8NattteFJp/O/e5kODk3YIosN.B5LtmAj9SUp77SkyEp6','foto-1595244747538.jpg'),(10,'','','','$2b$04$k0JNp/2ekvVcQ4JAwsHaOe.2Wz0lVuJyIb6SABdiyIk6j0GlM3xg2',''),(11,'','','','$2b$04$k6JbIOCuKdqxLjptKaP0zOWv0UokPnP3WNV.kVk/LyzCHH87jF3C2',''),(12,'','','','$2b$04$V.vM4dFrwuOhItWXhhLyFOKmccOchWj3Ov4G0rAp1uZvcXmEiGGgy',''),(13,'Agustin','Agustin','mcbain@hotmail.com','$2b$04$aeiRF516uKNMsDKTqrjFmOyd1RBFEQVWkf1DTkEbXiewjntWH2r3a',''),(14,'Agustin','Agustin','mcbain@hotmail.com','$2b$04$9y.69z/NwH0MkRrM6zsIpu8ptga7w0xiGjI47myCeQ8PRPVyUY.R.',''),(15,'Agustin','Graziani','mcbain@hotmail.com','$2b$04$gcp292wgSQhdr5bIvArZsOGKZGnxtPnOc70TZP57w54J6zJ7mUO8y',''),(16,'','','','$2b$04$.Se2ZvXPgX5IyyHbQmxPg.wzY/NMnt24/G2H87oeEy1Diae/gyO/m',''),(17,'','','','$2b$04$WpsY4uisYwaG8Blk.jn8dOwUksJSqbzMleQxVoJjd/ighuM5T2O5y',''),(18,'Agustin','','','$2b$04$IUKIVCA95NII8k1kNGyKguDBVB1PivroYdAU2FJZ6yCeMlsSr8bI6',''),(19,'','','','$2b$04$T6A2DGU3pMZh/9.TOToxouC/RtacndUyCzv54W3tqO2xBRSehSKUG',''),(20,'','','agi@sdv.com','$2b$04$B2IKZRl3qAgMNMXBCl6M/et2puwysq4p7n.RoX2QAvXRWvypuwCTi',''),(21,'','','agi@sdv.com','$2b$04$ply.m6nt1sxNdCFkXJhE7ucgelAAwAw3/p7Un1LMz3lHFqDbuKQBy',''),(22,'','','','$2b$04$8caXUA2mgVhaNAY1dZWcYO5uopmRrUk2gqeg6HEEcbYMRMhIL2JkG',''),(23,'','','','$2b$04$n1Ua31wUNQiaQkqEqUNKkenN6zIIM4YEekp2kL6sUaWGQcdJ1dLBm',''),(24,'','','','$2b$04$inUhRrHM/PKzl7vtneTnleei6YqONa0aH/A.t2cXff085vBf4ndam',''),(25,'','','','$2b$04$uoft/ov1PN4lzaEkBvvgHufqWV8J08K9eBQNqPclzEmDy8A9MIWR6',''),(26,'aaaaaaaaaa','','','$2b$04$Fi.3aBMpz59EEcnQl.M3DeYmTGConyDbfymnFWh1c149G/SYX.TM2',''),(27,'holisssss','','','$2b$04$4CxdT.tyeCww8wePRByF0ORfOcfXvAXuh4MPCo0Vd.WE7A4mWHE1q',''),(28,'Hernan','Crespo','crespo@hotmail.com','$2b$04$qSUC8kW9/LGLugqtO7XLKOA3iEpzj.Wy1wz1FB7dua6D.gdYZOQZi','foto-1596651572537.jpg'),(29,'Rainier','Wolfcastle','mcbain@gmail.com','$2b$04$4TzsRSNG7hDPrYibSmny0eb.I1y.jqybxsORX0PS7IkmFZTmq3v5m','foto-1596666541599.jpg'),(30,'Darth','Vader','darth@hotmail.com','$2b$04$BbhoE4.OYBUz0SP/M8y/lOvfGgPI2DP2K5cBBJvFgUSJhEsDcKY52','foto-1596651695939.jpg'),(31,'Chuck','Norris','chuck@gmail.com','$2b$04$p4Xcq.CWMa3QoNU/kwEX2Ovui63Ui.W/XUAPlenjMbiXjLSjE9fBO','foto-1596651803188.jpg'),(32,'John','Rambo','john_rambo@gmail.com','$2b$04$vY/4SuIJiAUscDQnwPWGWuy7Mi0/davJQfCs5hW0i1GWj1sXjw.y6','foto-1596828041838.jpg'),(33,'Roberto','Ayala','roberto_ayala@gmail.com','$2b$04$y8E68U.ycGNlKzoBde52VOGMlRD8VzadpKKGXXBxJAyVG0VxDsGMm','foto-1596830083709.jpg'),(34,'Walter','Samuel','walter_samuel@gmail.com','$2b$04$xSfY.J6.26wS2tT0ci/Nve76NLDmpOTRilb3PrTqmwAUD1EjXGZi2','foto-1596830200145.jpg');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_product`
--

DROP TABLE IF EXISTS `client_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_product`
--

LOCK TABLES `client_product` WRITE;
/*!40000 ALTER TABLE `client_product` DISABLE KEYS */;
INSERT INTO `client_product` VALUES (4,29,17),(5,29,28),(6,29,18),(7,29,19),(8,32,17),(9,32,28),(10,32,17),(11,32,22),(12,34,19),(13,32,23),(17,32,23),(19,32,16),(20,29,28),(22,29,93),(23,29,21);
/*!40000 ALTER TABLE `client_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `modelo` varchar(45) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(300) NOT NULL,
  `descriptionSeg` varchar(300) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `clasificacion_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_clasificacion` (`clasificacion_id`),
  CONSTRAINT `fk_products_clasificacion` FOREIGN KEY (`clasificacion_id`) REFERENCES `clasificacion` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (16,'Trifurcador','Trifurcador AMP',55555555,'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','','foto-1596648745314.png',3),(18,'Lorem ipsum','Lorem ipsum',2147483647,'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','                                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum\r\n                \r\n                ','foto-1597006547760.jpg',1),(19,'Lorem ipsum','Lorem ipsum',42727278,'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','foto-1594431757414.jpg',3),(21,'Lorem ipsum','Lorem ipsum',3364,'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','foto-1594431898305.jpg',2),(22,'Lorem ipsum','Lorem ipsum',0,'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','foto-1594431917965.jpg',1),(23,'Lorem ipsum','Lorem ipsum',352643,'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','foto-1594431935309.jpg',2),(26,'Lorem ipsum','Lorem ipsum',3463637,'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','foto-1594432011685.jpg',3),(28,'Lorem ipsum','Lorem ipsum',543572,'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum','foto-1594432365743.jpg',3),(93,'Guantes','DSVSV',446546,'texto de descripci├│n de prueba texto de descripci├│n de prueba texto de descripci├│n de prueba texto de descripci├│n de prueba texto de d','texto de descripci├│n de prueba texto de descripci├│n de prueba texto de descripci├│n de prueba texto de descripci├│n de prueba ','foto-1597006602946.jpg',2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'fasten_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-09 19:28:34
