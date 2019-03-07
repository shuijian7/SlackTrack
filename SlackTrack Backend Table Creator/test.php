
        <h1>CIS 210</h1>
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
                    if ($value[NUMBER] == 210){?>
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
        
        <h1>CIS 211</h1>
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
                    if ($value[NUMBER] == 211){?>
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
        
        <h1>CIS 212</h1>
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
                    if ($value[NUMBER] == 212){?>
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
        
        <h1>CIS 313</h1>
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
                    if ($value[NUMBER] == 313){?>
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
        
        <h1>CIS 314</h1>
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
                    if ($value[NUMBER] == 314){?>
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
        
        <h1>CIS 315</h1>
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
                    if ($value[NUMBER] == 315){?>
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
        
        <h1>CIS 330</h1>
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
                    if ($value[NUMBER] == 330){?>
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
        
        <h1>CIS 415</h1>
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
                    if ($value[NUMBER] == 415){?>
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
        
        <h1>CIS 422</h1>
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
                    if ($value[NUMBER] == 422){?>
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
        
        <h1>CIS 425</h1>
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
                    if ($value[NUMBER] == 425){?>
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
        </body>
        </html>