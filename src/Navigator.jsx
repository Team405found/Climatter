import React from 'react'
import { Router,Route,Routes,useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

import Map from './components/Map'
import Home from './Home'
import Prehumanera from './components/Story/journey/Prehumanera'
import PreIndustrialEra from './components/Story/journey/PreIndustrialEra'
import Prehuman from './components/Story/journey/Pre_human_st'
import PreIndustry from './components/Story/journey/Pre_industry_st'
import Industrial from './components/Story/journey/Industrial_st'
import IndustrialEra from './components/Story/journey/IndustrialEra'
import PostIndustry from './components/Story/journey/Post_industrial_st'
import PostIndustrialEra from './components/Story/journey/PostIndustrialEra'
import Greenhouseeffect from './components/Story/journey/greenhouse_effect_st'
import Climatechange from './components/Story/journey/ClimateChange'
import Impact from './components/Story/journey/impact'
import Animation from './components/Story/journey/Animation'


import Co2 from './components/Story/journey/Co2'
import Ch4 from './components/Story/journey/Ch4'
import N2o from './components/Story/journey/N2o'
import Ozone from './components/Story/journey/Ozone'


export default function Navigator(props) {
    const location = useLocation();

  return <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path='/climatter' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/Story/journey/Prehumanera" element={<Prehumanera />} />
            <Route path="/Story/journey/PreIndustrialEra" element={<PreIndustrialEra />} />
            <Route path="/Story/journey/Prehuman" element={<Prehuman />} />
            <Route path="/Story/journey/PreIndustry" element={<PreIndustry />} />
            <Route path="/Story/journey/Industrial_st" element={<Industrial />} />
            <Route path="/Story/journey/IndustrialEra" element={<IndustrialEra />} />
            <Route path="/Story/journey/PostIndustry" element={<PostIndustry />} />
            <Route path="/Story/journey/PostIndustrialEra" element={<PostIndustrialEra />} />
            <Route path="/Story/journey/Greenhouseeffect" element={<Greenhouseeffect />} />
            <Route path="/Story/journey/ClimateChange" element={<Climatechange />} />
            <Route path="/Story/journey/Impact" element={<Impact />} />
            <Route path="/Story/journey/Co2" element={<Co2 />} />
            <Route path="/Story/journey/Ch4" element={<Ch4 />} />
            <Route path="/Story/journey/N2o" element={<N2o />} />
            <Route path="/Story/journey/Ozone" element={<Ozone />} />
            <Route path="/Story/journey/Animation" element={<Animation />} />
        </Routes>
    </AnimatePresence>
}

