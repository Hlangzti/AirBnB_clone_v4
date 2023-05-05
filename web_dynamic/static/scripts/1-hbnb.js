var amenities = {};
$("#amenities-list input[type='checkbox']").change(function () {
    if (this.checked) {
        var amenity_id = $(this).data("id");
        var amenity_name = $(this).data("name");
        amenities[amenity_id] = amenity_name;
    } else {
        var amenity_id = $(this).data("id");
        delete amenities[amenity_id];
    }
    var amenities_list = "";
    for (var key in amenities) {
        amenities_list += amenities[key] + ", ";
    }
    $("#amenities h4").text(amenities_list);
});
