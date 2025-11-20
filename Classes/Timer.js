class Timer
{
	constructor(timerTime) 
	{
		this.timerTime = 0;

		this.startTime = 0;
		this.currentTime = 0;
		this.pausedTime = 0;
		this.missDelayedTime = 0;
		this.matchDelayedTime = 0;
		this.endDelayedTime = 0;
		
		this.timePaused = 0;
		this.missDelayDuration = 750;
		this.matchDelayDuration = 2000;
		this.endDelayDuration = 5000;

		this.timerPaused = false;
		this.timerMissDelayed = false;
		this.timerMatchDelayed = false;
		this.matchDelayFinished = false;
		this.finishMatchDelay = false;
		this.timerEndDelayed = false;
	}

	start()
	{
		this.timePaused = 0;
		this.timerPaused = false;
		this.startTime = Date.now();
	}

	update()
	{
		this.currentTime = Date.now();

		if(this.missDelayDuration < this.currentTime - this.missDelayedTime && this.timerMissDelayed)
		{
			this.timerMissDelayed = false;
		}

		if(this.matchDelayDuration < this.currentTime - this.matchDelayedTime && this.timerMatchDelayed)
		{
			this.matchDelayFinished = true;
		}

		if(this.matchDelayFinished && this.finishMatchDelay)
		{
			this.timerMatchDelayed = false;
			this.matchDelayFinished = false;
			this.finishMatchDelay = false;
			this.timePaused += this.currentTime - this.matchDelayedTime;
		}

		if(this.endDelayDuration < this.currentTime - this.endDelayedTime && this.timerEndDelayed)
		{
			this.timerEndDelayed = false;
			this.timePaused += this.currentTime - this.endDelayedTime;
		}
	}

	setTimerTime(timerTime)
	{
		this.timerTime = timerTime;
	}

	getTimerTime()
	{
		return this.timerTime;
	}

	getRunTime()
	{
		return this.currentTime - this.startTime - this.timePaused;
	}

	pause()
	{
		this.timerPaused = true;
		this.pausedTime = Date.now(); 
	}

	unpause()
	{
		this.timerPaused = false;
		this.timePaused += Date.now() - this.pausedTime;
	}

	isPaused()
	{
		return this.timerPaused;
	}

	missDelay()
	{
		this.timerMissDelayed = true;
		this.missDelayedTime = Date.now();
	}

	isMissDelayed()
	{
		return this.timerMissDelayed;
	}

	matchDelay()
	{
		this.timerMatchDelayed = true;
		this.matchDelayedTime = Date.now();
	}

	isMatchDelayed()
	{
		return this.timerMatchDelayed;
	}

	endMatchDelay()
	{
		if(this.matchDelayFinished)
		{
			this.finishMatchDelay = true;
		}
	}

	endDelay()
	{
		this.timerEndDelayed = true;
		this.endDelayedTime = Date.now();
	}

	isEndDelayed()
	{
		return this.timerEndDelayed;
	}
}