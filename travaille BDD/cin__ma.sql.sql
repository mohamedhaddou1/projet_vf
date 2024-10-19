-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Sam 19 Octobre 2024 à 17:52
-- Version du serveur :  5.6.15-log
-- Version de PHP :  5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `cinéma`
--
CREATE DATABASE IF NOT EXISTS `cinéma` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `cinéma`;

-- --------------------------------------------------------

--
-- Structure de la table `acteur`
--

CREATE TABLE IF NOT EXISTS `acteur` (
  `IDENT_ACTEUR` int(11) NOT NULL,
  `NOM` varchar(60) NOT NULL,
  `PRENOM` varchar(60) NOT NULL,
  `DATE_NAISSANCE` date NOT NULL,
  `NB_FILM` int(11) NOT NULL,
  PRIMARY KEY (`IDENT_ACTEUR`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `acteur`
--

INSERT INTO `acteur` (`IDENT_ACTEUR`, `NOM`, `PRENOM`, `DATE_NAISSANCE`, `NB_FILM`) VALUES
(1, 'DURIS', 'ROMAIN', '1974-05-24', 60),
(2, 'EXARCHOPOULOS', 'ABDEL', '1993-11-22', 23),
(3, 'BORHINGER ', 'RICHARD', '1942-06-16', 132),
(4, 'GALABRU', 'MICHEL', '1922-10-27', 277),
(5, 'PARILLAUD', 'ANNE', '1960-05-06', 35),
(6, 'FORD', 'HARRISSON', '1942-06-13', 64),
(7, 'FISHER', 'CARRIE', '1956-10-21', 74),
(8, 'SALDANA', 'ZOE', '1978-06-19', 31),
(9, 'WEAVER', 'SIGOURNEY', '1949-10-06', 66),
(10, 'RENO', 'JEAN', '1948-06-30', 75);

-- --------------------------------------------------------

--
-- Structure de la table `casting`
--

CREATE TABLE IF NOT EXISTS `casting` (
  `IDENT_FILM` int(11) NOT NULL,
  `IDENT_ACTEUR` int(11) NOT NULL,
  `ROLE` varchar(60) NOT NULL,
  `NB_JOUR_TOURNAGE` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `casting`
--

INSERT INTO `casting` (`IDENT_FILM`, `IDENT_ACTEUR`, `ROLE`, `NB_JOUR_TOURNAGE`) VALUES
(1, 1, 'FRANCOIS', 100),
(1, 2, 'JULIA', 100),
(2, 5, 'NIKITA', 68),
(2, 10, 'VICTORE LE NETTOYEUR', 9),
(3, 6, 'HAN SOLO', 201),
(3, 7, 'PRINCESSE LEIA', 203),
(4, 8, 'NEYTIRI', 50),
(4, 9, 'DR. grace augustine', 45);

-- --------------------------------------------------------

--
-- Structure de la table `distributeur`
--

CREATE TABLE IF NOT EXISTS `distributeur` (
  `IDENT_DISTRIBUTEUR` int(11) NOT NULL,
  `nom_distributeur` varchar(60) NOT NULL,
  PRIMARY KEY (`IDENT_DISTRIBUTEUR`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `distributeur`
--

INSERT INTO `distributeur` (`IDENT_DISTRIBUTEUR`, `nom_distributeur`) VALUES
(1, 'GAUMONT'),
(2, '20th century fox');

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

CREATE TABLE IF NOT EXISTS `film` (
  `IDENT_FILM` int(11) NOT NULL,
  `TITRE` varchar(60) NOT NULL,
  `GENRE1` varchar(60) NOT NULL,
  `GENRE2` varchar(60) DEFAULT NULL,
  `datesortie` date NOT NULL,
  `IDENT_PAYS` int(11) NOT NULL,
  `IDENT_REALISATEUR` int(11) NOT NULL,
  `IDENT_DISTRIBUTEUR` int(11) NOT NULL,
  `duree` int(11) NOT NULL,
  PRIMARY KEY (`IDENT_FILM`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `film`
--

INSERT INTO `film` (`IDENT_FILM`, `TITRE`, `GENRE1`, `GENRE2`, `datesortie`, `IDENT_PAYS`, `IDENT_REALISATEUR`, `IDENT_DISTRIBUTEUR`, `duree`) VALUES
(1, 'SUBWAY', 'POLICIER', 'DRAME', '1958-04-10', 1, 1, 1, 104),
(2, 'NIKITA', 'DRAME', 'ROMANTIQUE', '1990-02-21', 1, 1, 1, 118),
(3, 'STAR WARS 6 : LE RETOUR DU JEDI', 'ACTION', 'SF', '1983-10-19', 2, 2, 2, 133),
(4, 'AVATAR', 'ACTION', 'SF', '2009-10-16', 2, 3, 2, 170),
(5, 'Bienvenue chez les chtis', 'comédie', '', '2008-02-27', 1, 4, 1, 104);

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE IF NOT EXISTS `pays` (
  `IDENT_PAYS` int(11) NOT NULL,
  `LIBELLE` varchar(60) NOT NULL,
  PRIMARY KEY (`IDENT_PAYS`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pays`
--

INSERT INTO `pays` (`IDENT_PAYS`, `LIBELLE`) VALUES
(1, 'FRANCE'),
(2, 'ETATS-UNIS');

-- --------------------------------------------------------

--
-- Structure de la table `réalisateur`
--

CREATE TABLE IF NOT EXISTS `réalisateur` (
  `IDENT_REALISATEUR` int(11) NOT NULL,
  `NOM` varchar(60) NOT NULL,
  `PRENOM` varchar(60) NOT NULL,
  `DATE_NAISSANCE` date NOT NULL,
  `NB_FILM_ECRIT` int(11) NOT NULL,
  `NB_FILM_PRODUIT` int(11) NOT NULL,
  PRIMARY KEY (`IDENT_REALISATEUR`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `réalisateur`
--

INSERT INTO `réalisateur` (`IDENT_REALISATEUR`, `NOM`, `PRENOM`, `DATE_NAISSANCE`, `NB_FILM_ECRIT`, `NB_FILM_PRODUIT`) VALUES
(1, 'BESSON', 'LUC', '1959-03-18', 40, 99),
(2, 'LUCAS', 'GEORGES', '1944-04-14', 79, 64),
(3, 'CAMERON', 'JAMES', '1954-08-16', 22, 23),
(4, 'Dany boon', '', '0000-00-00', 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
