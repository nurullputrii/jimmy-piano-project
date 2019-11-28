import javax.swing.JOptionPane;

public class FavoriteSong {
    public static void main(String[] args) {
        String[] songs = {"Dream a Little Dream of Me", "Close to You", "Pink + White", "Honesty"};
//      making an array that contains 4 songs
        for (String eachSong : songs) {
//          accessing each item on the array to displaying into 4 lines
            System.out.println(eachSong);
        }
    }
}
