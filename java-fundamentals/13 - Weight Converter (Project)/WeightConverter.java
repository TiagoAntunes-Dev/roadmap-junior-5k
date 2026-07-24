import java.util.Scanner;

public class WeightConverter {
   public static void main(String[] args) {

       Scanner scanner = new Scanner(System.in);

       // Weight Conversion Program

       // Declare Variables

       double weight;
       double newWeight;
       int choice;

       // Welcome Message

       System.out.println("Weight Conversion Program");
       System.out.println("1: Convert Lbs to Kgs");
       System.out.println("2: Convert Kgs to Lbs");

       System.out.println("Chose an option: ");
       choice = scanner.nextInt();

       // Prompt for user choice

       // System.out.println(choice); Just seeing if it works (It Does)

       // Option 1: Convert Lbs to Kgs
       if (choice == 1) {
           System.out.print("Enter the weight in lbs: ");
           weight = scanner.nextDouble();
           newWeight = weight * 0.453592;
           System.out.printf("The new weight in kgs is: %.2f", newWeight);
       }

       // Option 2: Convert Kgs to Lbs
       else if (choice == 2) {
           System.out.print("Enter the weight in kgs: ");
           weight = scanner.nextDouble();
           newWeight = weight * 2.20462;
           System.out.printf("The new weight in lbs is: %.2f", newWeight);
       }
       // Else print not a valid choice

       else {
           System.out.println("That is not a valid choice");
       }
       scanner.close();
   }
}
