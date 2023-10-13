<script>
document.addEventListener("DOMContentLoaded", function () {
    
    var currentDate = new Date();

    var dateString = currentDate.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById("current-date").textContent = "Last Updated: " + dateString;
})
</script>	