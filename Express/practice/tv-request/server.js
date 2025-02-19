import express from "express";
import tvShows from "./data.js";

const app = express();

// Route to get all TV shows
app.get("/api/getAll", (req, res) => {
  try {
    return res.status(200).json(tvShows);
  } catch (error) {
    res.status(500).json({ message: "no tv shows" });
  }
});

// Route to get TV shows by year
app.get("/api/getAll/:year", (req, res) => {
  try {
    const year = parseInt(req.params.year);
    const showsByYear = tvShows.filter((show) => show.yearCreated === year);

    if (showsByYear.length === 0) {
      return res
        .status(404)
        .json({ message: `No TV shows found for the year ${year}` });
    }

    return res.status(200).json(showsByYear);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching TV shows" });
  }
});

//Route to delete with a title path parameter
app.delete("/api/delete/:title", (req, res) => {
  try {
    const title = req.params.title;
    const afterDelete = tvShows.filter((show) => show.tvShow !== title);
    return res.status(200).json(afterDelete);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while deleting TV shows" });
  }
});

// PATCH route to update the starring property of a TV show by title
app.patch("/api/tvshows/:title", (req, res) => {
  try {
    const title = req.params.title; // Extract the title from the URL
    const newStarring = req.body.starring; // Extract the new starring array from the request body

    console.log("Title:", title);
    console.log("New Starring:", newStarring);

    // Validate the request body
    if (!newStarring || !Array.isArray(newStarring)) {
      return res
        .status(400)
        .json({ message: "Invalid request body: 'starring' must be an array" });
    }

    // Find the TV show by title
    const show = tvShows.find((s) => s.tvShow === title);
    console.log("Found Show:", show);
    // If the TV show is not found, return a 404 error
    if (!show) {
      return res
        .status(404)
        .json({ message: `TV show with title '${title}' not found` });
    }

    // Update the starring property
    show.starring = newStarring;
    console.log("Updated Show:", show);
    // Return the updated TV show
    return res.status(200).json(show);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the TV show" });
  }
});

// app.patch("/api/tvshows/:title", (req, res) => {
//   try {
//     const { title } = req.params;
//     const { starring } = req.body;

//     if (!starring || !Array.isArray(starring)) {
//       return res.status(400).json({ message: "Starring must be an array" });
//     }

//     const show = tvShows.find((show) => show.tvShow === title);

//     if (!show) {
//       return res.status(404).json({ message: "TV Show not found" });
//     }

//     show.starring = starring;

//     res.json({ message: "Starring updated successfully", tvShow: show });
//   } catch (error) {
//     console.error("Error updating starring:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

//Route to add a tv show
app.post("/api/show/new", (req, res) => {
  try {
    tvShows.push(req.body);
    return res.status(201).json(tvShows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while adding the TV shows" });
  }
});

const port = 8000;

app.listen(port, () => console.log(`server is runnig on the port ${port}`));
