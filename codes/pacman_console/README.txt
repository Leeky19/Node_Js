Note de base de l'application



Fichier map contient la map
Map =   Tableau 2D
	Pacman = P
	Piece = .
	Fantôme = F
	Mur = 0 ou O

Fichier pacman (personnage)
	position en X et Y
	bool état (loose)
	bool collision?(à X+1? X-1? Y+1? Y-1?)
	
Fichier fantome(ennemie)
	position
	collision?(Mur et Pacman )

Un Fichier Upload() : ecrit sur la map
	personnage bouge
	fantome bouge
	point qui disparraisse	
	Win?
	Loose

boucle : 
etat map = on la "dessine" (lecture du fichier)
etat P = mort ou vivant ?
deplacement P
deplacement F
