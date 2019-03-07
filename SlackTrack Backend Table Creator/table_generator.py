
#When passed coursearray with the form of a list constaining a courses class number
#in the form of [[course abbreviation],[course number]] will append to the output file
#HTML table objects

#i.e. outputfile = index.php and coursearray =[["CIS","210"],["CIS","211"],["CIS","212"],["CIS","313"]
#,["CIS","314"],["CIS","315"],["CIS","330"],["CIS","415"],["CIS","422"],["CIS","425"]]

#will append table objects to the index.php output file
def table_generator(coursearray, output):
    for inner in coursearray:
        print (inner)
        table = """
        <h1>"""+inner[0]+" "+inner[1]+"""</h1>
        <table class="sortable">
                <thead>
                    <tr>
                        <th>Instructor</th>
                        <th>Percentage of A's</th>
                        <th>Percentage of B's</th>
                        <th>Percentage of C's</th>
                        <th>Percentage of D's</th>
                        <th>Percentage of F's</th>
                        <th>Withdrawal Percentage</th>
                        <th>Total Number of Students</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($cis as $value){
                    if ($value[NUMBER] == """+inner[1]+"""){?>
                <tr>
                    <td><?php echo escape($value[INSTRUCTOR]); ?></td>
                    <td><?php echo escape(percent(round(($value[AP]+$value[A]+$value[AM])/($value[TOT_NON_W]),2))); ?></td>
                    <td><?php echo escape(percent(round(($value[BP]+$value[B]+$value[BM])/($value[TOT_NON_W]),2))); ?></td>
                    <td><?php echo escape(percent(round(($value[CP]+$value[C]+$value[CM])/($value[TOT_NON_W]),2))); ?></td>
                    <td><?php echo escape(percent(round(($value[DP]+$value[D]+$value[DM])/($value[TOT_NON_W]),2))); ?></td>
                    <td><?php echo escape(percent(round(($value[F])/($value[TOT_NON_W]),2))); ?></td>
                    <td><?php echo escape(percent(round(($value[W])/($value[TOT_NON_W]),2))); ?></td>
                    <td><?php echo escape($value[W]+$value[TOT_NON_W]); ?></td>


                </tr>
    <?php }} ?>
            </tbody>
        </table>
        """
        text_file = open(output, "a")

        text_file.write(table)

        text_file.close()

    return None

def main():
    output = "test.php"
    passedarray = [["CIS","210"],["CIS","211"],["CIS","212"],["CIS","313"],["CIS","314"],["CIS","315"],["CIS","330"],["CIS","415"],["CIS","422"],["CIS","425"]]
    table_generator(passedarray, output)
    
    text_file = open(output, "a")
    w = """</body>
        </html>"""
    text_file.write(w)
    
    text_file.close()


if __name__=="__main__":
    main()
