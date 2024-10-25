import java.util.TimerTask;
import java.util.Timer;

public class Functions {


    @SuppressWarnings("unused")
    private void Timer(){
        Timer timer;
        timer = new Timer();
		timer.schedule(new TimerTask() {
			@Override
			public void run() {
				//code to execute when time-out is reached
			}
		}, 1*60*1000);//time after code is executed
    }

}