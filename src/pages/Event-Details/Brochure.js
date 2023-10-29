import React from "react";
import BlankSpace from "../../static/event-brochure/Blank Space.pdf";
import yoUI from "../../static/event-brochure/you&I.pdf";
import codeRverse from "../../static/event-brochure/codeR-verse.pdf";
import trouble from "../../static/event-brochure/I knew.pdf";
import pitching from "../../static/event-brochure/Hustlers.pdf";
import ads from "../../static/event-brochure/Ads.pdf";
import Alaipaduthey from "../../static/event-brochure/Alaipaduthay.pdf";
import Valorant from "../../static/event-brochure/valorant.pdf";
import quiz from "../../static/event-brochure/Trivia.pdf";
import chess from "../../static/event-brochure/chess.pdf";
import CodeRed from "../../static/event-brochure/Hackathon.pdf";

export default function Brochure({eventDetail}) {
  return (
    <>
    { eventDetail.eventId === "Blank Space" ? 
      (<iframe src={BlankSpace} class=" h-screen w-screen " title="title" style={{marginLeft:"-10px",}} allowfullscreen></iframe>):
      (eventDetail.eventId === "yoU & I" ?
        (<iframe src={yoUI} class=" h-screen w-screen " title="title" style={{marginLeft:"-10px",}} allowfullscreen></iframe>
        ):
        (eventDetail.eventId === "codeR-verse" ?
            (<iframe src={codeRverse} class=" h-screen w-screen " title="title" style={{marginLeft:"-10px",}} allowfullscreen></iframe>
            ):
            ( eventDetail.eventId === "I Knew you were trouble" ? 
                (<iframe src={trouble} class=" h-screen w-screen " title="title" style={{marginLeft:"-10px",}} allowfullscreen></iframe>
                ):
                (eventDetail.eventId === "Hustlers Harmony" ? 
                    (<iframe src={pitching} class=" h-screen w-screen " title="title" style={{marginLeft:"-10px",}} allowfullscreen></iframe>
                    ):( eventDetail.eventId === "Trivia Fiesta" ? 
                    (<iframe src={quiz} class=" h-screen w-screen " title="title" style={{marginLeft:"-10px",}} allowfullscreen></iframe>
                    ):
                    (eventDetail.eventId === "Ads don’t lie" ? 
                        (<iframe src={ads} class=" h-screen w-screen " title="title" style={{marginLeft:"-10px",}} allowfullscreen></iframe>
                        ):
                        (eventDetail.eventId === "Alaipaduthey" ? 
                            (<iframe src={Alaipaduthey} class=" h-screen w-screen " title="title" style={{marginLeft:"-10px",}} allowfullscreen></iframe>
                            ):
                            (eventDetail.eventId === "Valorant" ? 
                                (<iframe src={Valorant} class=" h-screen w-screen " title="title" style={{marginLeft:"-10px",}} allowfullscreen></iframe>
                                ):
                                (eventDetail.eventId === "The Knight changes" ? 
                                    (<iframe src={chess} class=" h-screen w-screen " title="title" style={{marginLeft:"-10px",}} allowfullscreen></iframe>
                                    ):
                                    (<iframe src={CodeRed} class=" h-screen w-screen " title="title" style={{marginLeft:"-10px",}} allowfullscreen></iframe>)
                                )
                            )
                        )
                    )
                )
            )
        )
      )
    )
    }
    </>
  );
}