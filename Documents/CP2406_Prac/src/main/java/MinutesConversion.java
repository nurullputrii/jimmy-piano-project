import java.util.Scanner;


public class MinutesConversion {
    public static void main(String[] args) {
        int minutes;
        Scanner inputMinutes = new Scanner(System.in);
        System.out.println("Enter the minutes value: ");
        minutes = inputMinutes.nextInt();
//        this is for the calculation

        double minutesToHours = minutes / 60d;
        double minutesToDays =  (minutesToHours / 24d);

        System.out.println(minutes + " equals to " + minutesToHours + " hours " + "and " + String.format("%.3f", minutesToDays) + " days");

    }

}
