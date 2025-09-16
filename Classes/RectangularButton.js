class RectangularButton
{
	constructor(x, y, width, height, image) 
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.image = image;
  	}

  	clicked(x, y)
  	{
  		return (x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height);
  	}
}