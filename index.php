<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Mini projet - Serveur Web</title>
    </head>
    <body>
		<p>List of files:</p>
		<ul>
			<?php
				if ($folder = opendir('sites')) {
					while (false !== ($file = readdir($folder)))
					{
						if ($file != "." && $file != ".." && strtolower(substr($file, strrpos($file, '.') + 1)) == 'html')
						{
							echo '<li><a href="sites/'.$file.'">'.$file.'</a></li>';
						}
					}
					closedir($folder);
				}
			?>
		</ul>
    </body>
</html>