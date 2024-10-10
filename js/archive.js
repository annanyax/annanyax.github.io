document.addEventListener("DOMContentLoaded", function () {
    // Load the CSV file
    Papa.parse("projects.csv", {
        download: true,
        header: true,
        complete: function(results) {
            const data = results.data;
            const projectsList = document.getElementById("projects-list");

            // Iterate over the data and create rows
            data.forEach(project => {
                const row = document.createElement("div");
                row.classList.add("archive-table-row");

                row.innerHTML = `
                    
                    <div class="title">${project.Title}</div>
                    <div class="technologies">${project.Technologies}</div>
                    <div class="year">${project.Year}</div>
                    <div class="links"><a href="${project.Link}" target="_blank"><i class="fas fa-external-link-alt"></i></a></div>
                `;
                projectsList.appendChild(row);
            });
        }
    });
});
