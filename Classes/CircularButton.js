class CircularButton
{
	constructor(x, y, size, image) 
	{
		this.x = x;
		this.y = y;
		this.size = size;
		this.image = image;
  	}

  	clicked(x, y)
  	{
  		return (x - (this.x + this.size / 2)) * (x - (this.x + this.size / 2)) + (y - (this.y + this.size / 2)) * (y - (this.y + this.size / 2)) <= ((this.size / 2) * (this.size / 2));
  	}
}