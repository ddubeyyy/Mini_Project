
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class JavaBackend {

    public static String executeCode(String code) throws IOException, InterruptedException {
        // Compile and execute Java code
        Process process = new ProcessBuilder("java", "-cp", ".", "Main").start();
        process.getOutputStream().write(code.getBytes());
        process.getOutputStream().close();
        
        // Capture output
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        StringBuilder output = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            output.append(line).append("\n");
        }
        reader.close();

        // Wait for process to finish
        process.waitFor();

        return output.toString();
    }

    public static void main(String[] args) {
        // Implement server logic here (e.g., using Jetty or Spring Boot)
    }
}
