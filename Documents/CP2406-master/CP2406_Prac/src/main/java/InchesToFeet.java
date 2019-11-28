import java.lang.Math;


public class InchesToFeet {
    public static void main (String[] args) {
        int inches = 90;
        int inchesToFeet = (inches / 12);
        int remainderInches = inches % 12;

        System.out.println("Your height in feet is " + inchesToFeet + " feet " + remainderInches + " inches");
    }

}
