/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Simulador;

import javax.swing.JOptionPane;

/**
 *
 * @author ALEX
 */
public class asdas {
    public static void main(String[] args) {

        try {
            int div = 10/0;
        } catch (ArithmeticException e) {
            JOptionPane.showMessageDialog(null, "Error no se puede divir entre 0 ","Error",JOptionPane.ERROR_MESSAGE);
        }
    }
}
