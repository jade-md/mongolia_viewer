import React from "react";
import Style from "./mapStyling";
import Tooltip from "./tooltips";
import Popup from "./popups";

function Data() {
  return {
    explorer: {
      // <---START HERE!!--->
      config: {
        showInfoButton: true, // show more information for all data sections
        showDownloadButton: true, // show download button if there is a link to the dataset
        chartIsLinkedTo: 4, // the datasetID the chart should be linked to, if no linking write chartIsLinkedTo: null
        showLandingPage: true, // toggle landing page
      },

      // ADD YOUR BASEMAP HERE
      baseMap: {
        src:
          "https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png",
        attribution:
          "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>",
        center: [46.0, 109.7],
        zoom: 5.25,
        labelsSrc:
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png",
      },
      /*Example of satelite basemap
      src:
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attribution:
          "attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'",
      */




      /* <--- IN THIS ARRAY ALL DATASECTIONS ARE INCLUDED --->
      Each datasection include:
      id -- order in array 
      title -- title of section
      
      infotext -- text that will be diplayed in the secondary panel if showInfoButton: true
      img -- image for secondary panel (optional) should be saved in static/images/

      expanded -- if the secion is expanded or collapsed by default (true or false)
       */
      dataSections: [
        {
          id: 0,
          title: "Habitat quality model inputs",
          infotext: [
            {
              subtitle: "Description",
              text: (
                <div>
                  This section includes two shapefiles, one polygon and one pointmap. The
                  pointmap has tooltips and popups that are displayed when the icon is
                  clicked.{" "}
                  <a
                    href="https://github.com/jade-md/mongolia_viewer.git"
                    target="_blank"
                    rel="noopener noreferrer">
                    This is a link to the Github repo
                  </a>
                </div>
              ),
            },
            {
              subtitle: "Method",
              text: (
                <div>
                  Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis
                  disparturient montes, nascetur ridiculus mus.
                </div>
              ),
            },
          ],
          img: "natcap.png",
          expanded: false,
        },
        {
          id: 1,
          title: "Habitat quality model outputs",
          infotext: [
            {
              subtitle: "Description",
              text: (
                <div>
                  This section has an linked chart connected to the shapefile. Read about
                  details for this in the readme.
                </div>
              ),
            },
          ],
          expanded: true,
        },
      ],





      /* <--- IN THIS ARRAY ALL DATASETS ARE INCLUDED --->
      Each dataset include:
      id -- order in array 
      sectionID -- which section the dataset belongs to
      title -- title of dataset
      type -- what type of source (choose between shapefile, tiles (webhosted) or rasters (tif - must be projected with EPSG:4326)  )
      src -- file name (place the files in the corresponding folders for shapefile .. )
      legendSrc -- filename of the lagend (place it in the legend folder)
      selected -- If the dataset should be selected by default
      link -- link for data download (optional)
      style -- custom styles for shapefiles and rasters (create them in mapstyling.js and add them here)

      ONLY FOR SHAPEFILES 
      styleProperty -- the property you want to use for styling the map (if conditional styling based on properties in the shapefile)
      tooltip -- created in tooltips.js
      popup -- created in popups.js
      
      If map layer is linked to chart:
      chartProperties -- which properties from the shapefile to be used 
      namesOfProperties -- Names of the properties (use the same names in the chart for the colors)
       */
      datasets: [
        {
          id: 0,
          sectionID: 0,
          title: "Gobisteppe",
          type: "shapefile",
          src: "aoi_gcs.zip",
          style: Style().redOutline,
          legendSrc: "exampleLegend3.png",
          selected: true,
          link: "https://en.wikipedia.org/wiki/Region_of_interest",
        },
        {
          id: 1,
          sectionID: 0,
          title: "Accessibility",
          type: "shapefile",
          src: "accessibility.zip",
          style: Style().newColorStyle,
          styleProperty: "ACCESS", // change to the name of the shapefile property you want the styling to be based on
          legendSrc: "access_legend.png",
          selected: false,
          link: "https://drive.google.com/open?id=1UP8wiEaM3Bry6jwC8nVpWVfZefWiOWIf&authuser=jademd%40stanford.edu&usp=drive_fs",
        },
        {
          id: 2,
          sectionID: 0,
          title: "Land use/cover",
          type: "raster",
          src: "lulc_current_gcs.tif", // must be projected with EPSG:4326
          style: Style().greenAndRedRaster,
          legendSrc: "lulc_legend.png",
          selected: true,
        },
        {
          id: 2,
          sectionID: 0,
          title: "Shapefile (points)",
          type: "shapefile",
          src: "nationalParks.zip",
          legendSrc: "nationalParksLegend.png",
          selected: false,
          icon: "forest.svg",
          tooltip: Tooltip().nameTooltip,
          popup: Popup().examplePopup,
        },
        {
          id: 3,
          sectionID: 0,
          title: "Tiles",
          type: "tiles",
          src:
            "https://charlottegiseleweil.github.io/tiles/amazon/Dengue_PEM_pres/{z}/{x}/{y}.png",
          legendSrc: "exampleLegend4.png",
          selected: false,
        },
        {
          id: 4,
          sectionID: 0,
          title: "Raster",
          type: "raster",
          src: "exampleRaster.tif", // must be projected with EPSG:4326
          style: Style().greenAndRedRaster,
          legendSrc: "exampleLegend2.png",
          selected: false,
        },

        // Example of map layer linked to chart
        {
          id: 5,
          sectionID: 1,
          title: "Styled shapefile",
          type: "shapefile",
          src: "Watersheds.zip",
          style: Style().redToBlue,
          styleProperty: "Base_idx",
          legendSrc: "exampleLegend1.png",
          selected: true,
          chartProperties: ["L_ann", "Qf_ann", "Qb_ann"], // properties from the shapefile to display on the chart
          namesOfProperties: ["Property1", "Property2", "Property3"], // Names of the properties (use the same names in the chart for the colors)
        },
      ],





      /* HERE YOU INCLUDE THE CHART --remove if you don't want a chart
      A chart include:
      title -- chart title
      yLabel -- label of y axis
      columns -- data for the chart - the first row includes the x-labels
      colors -- colors for the data 
      type -- line or bar
      yMax,yMin -- optional max and min values for the y-axis*/
      chart: {
        title: "Chart linked to map",
        yLabel: "Example y Label",
        columns: [], // empty if linked chart
        colors: {
          // same name as stated in the namesOfProperties
          Property1: "#66383D",
          Property2: "#EAC7CB",
          Property3: "E67F8B",
        },
        type: "bar",
        yMax: 2500, // optional max value on axis
      },




      /* Example of a non linked chart
          title: "Example Line chart",
          yLabel: "Example y Label",
          columns: [
            ["x-label", "Label-1", "Label-2", "Label-3"],

            ["Data-1", 30, 10, 25],
            ["Data-2", 11, 13, 5],
            ["Data-3", 10, 15, 20],
          ],
          colors: {
            "Data-1": "#a6a6a6",
            "Data-2": "#ffd633",
            "Data-3": "#009933",
          },
          type: "line",
        }, */
    },
  };
}

export default Data;
