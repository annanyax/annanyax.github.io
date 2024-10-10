document.addEventListener("DOMContentLoaded", function () {
    // Load the CSV file
    Papa.parse("blogs.csv", {
        download: true,
        header: true,
        complete: function(results) {
            const data = results.data;
            const blogsList = document.getElementById("blogs-list");

            // Iterate over the data and create rows for each blog
            data.forEach(blog => {
                const row = document.createElement("div");
                row.classList.add("archive-table-row");

                row.innerHTML = `
                    <div class="date">${blog.Date}</div>
                    <div class="title">${blog.Title}</div>
                    <div class="description">${blog.Description}</div>
                    <div class="links"><a href="${blog.Link}" target="_blank"><i class="fas fa-external-link-alt"></i></a></div>
                `;
                blogsList.appendChild(row);
            });
        }
    });
});
