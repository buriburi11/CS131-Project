class Garbage
{
	constructor(x, y, size, image, type) 
	{
		this.x = x;
		this.y = y;
		this.size = size;
		this.image = image;
		this.type = type;

		this.falling = true;
  	}

  	clicked(x, y)
  	{
  		return (x > this.x && x < this.x + this.size && y > this.y && y < this.y + this.size);
  	}

  	isColliding(other) 
  	{
  		return (this.x < other.x + other.size &&
   				    this.x + this.size > other.x &&
   				    this.y < other.y + other.size &&
   				    this.y + this.size > other.y); 
  	}
}