import React, { useEffect, useState, useRef } from "react";
import Config from '../config/Config';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import SearchJob from "../components/SearchJob/SearchJob";
import JobsList from "../containers/JobsList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
export default function HOME(){

  const baseUrl = {
    github: "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
  }
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState({
    title: "",
    location: ""
  })
  const initialReqUrlRender = useRef(true);
  useEffect(() => {
    if (initialReqUrlRender.current) {
      initialReqUrlRender.current = false;
      getJobs(job)
    } else {
      getJobs(job);
    }
  }, [job]);

  const getJobs = async (job) => {
    //  Github 
    const realReqUrl = `${Config.sitesConfig.github.url}?description=${job.title}&location=${job.location}`
    console.log('githuburl', realReqUrl)
    let response = await fetch(realReqUrl, {
      method: "GET",
      headers: { "X-Requested-With": "XMLHttpRequest" }
    });
    let data = await response.json();
    let formattedData = formatData(data, 'github')
    let jobs = formattedData
    // setJobs(formattedData)

    // // Jooble
    let opts = {
      keywords: job.title === "" ? "it" : job.title, // jooble requires keywords field
      location: job.location,
      searchMode: 1 // recommeded job from jooble
    }
    response = await fetch(`${Config.sitesConfig.jooble.url}${Config.sitesConfig.jooble.API_KEY}`, {
      method: 'post',
      body: JSON.stringify(opts)
    })
    data = await response.json()
    console.log('--',data)
    data = data.jobs
    console.log('jb', data)
    formattedData = formatData(data, 'jooble')
    jobs = jobs.concat(formattedData)
    setJobs(jobs)
  };

  const formatData = (data, site) => {
    const newData = data.map(data => formatGithubData(data, site))
    console.log(newData)
    return newData
  }

  const formatGithubData = (data, site) => {
    const formattedData = {}
    if (site === 'github') {
      Object.assign(formattedData, {
        from: "github",
        id: data.id,
        title: data.title,
        location: data.location,
        company: data.company,
        created_at: data.created_at,
        url: data.url
      })
    } else if (site === 'jooble') {
      Object.assign(formattedData, {
        from: "facebook",
        id: data.id,
        title: data.title,
        location: data.location,
        company: data.company,
        created_at: data.updated,
        url: data.link
      })
    }
    return formattedData
  }




  return (
    <div className="App">
      <Header />
      <Container>
        <SearchJob
          updateJobDetail={setJob}
        />
        <JobsList jobs={jobs} />
      </Container>
      <Footer />
  
    </div>
  );
}


