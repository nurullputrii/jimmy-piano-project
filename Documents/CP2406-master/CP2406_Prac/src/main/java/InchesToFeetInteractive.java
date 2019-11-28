import java.util.Scanner;

public class InchesToFeetInteractive {
    public static void main(String[] args) {
        int inches;
        Scanner inputInches = new Scanner(System.in);
        System.out.println("Please enter your height in inches: ");
        inches = inputInches.nextInt();
// this is for the calculation
        int inchesToFeet = (inches / 12);
        int remainderInches = inches % 12;
// this is for the output
        System.out.println("Your height in feet is " + inchesToFeet + " feet " + remainderInches + " inches");
    }

}
