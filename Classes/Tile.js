class Tile
{
	constructor(x, y, size, image) 
	{
		this.x = x;
		this.y = y;
		this.size = size;
		this.image = image;

		this.flipped = false;
		this.matched = false;
  	}

  	clicked(x, y)
  	{
  		return (x > this.x && x < this.x + this.size && y > this.y && y < this.y + this.size);
  	}
}