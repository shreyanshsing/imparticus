export const getAverageRating = ( course: any ) => {
    const { star5, star4, star3, star2, star1} = course.ratings

    const currentTotal = parseInt(star5)+parseInt(star4)+parseInt(star3)+parseInt(star2)+parseInt(star1)
    const totalRating = 15

    return (currentTotal/totalRating)
}

export const getRatingsCount = ( course: any) => {
    const { star5, star4, star3, star2, star1} = course.ratings

    const currentTotal = parseInt(star5)+parseInt(star4)+parseInt(star3)+parseInt(star2)+parseInt(star1)

    return currentTotal
}