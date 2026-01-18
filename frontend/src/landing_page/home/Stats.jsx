import React from "react";

function Stats() {
  return (
    <div className="container mt-5 p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h3 className="mb-5">Trust with confidence</h3>

          <h4>Customer-first always</h4>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h4>No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h4>The Zerodha universe</h4>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h4>Do better with money</h4>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5" >
          <img
            src="\media\ecosystem.png"
            alt=""
            style={{ width: "90%" }}
          />
          <div className="text-center p-5">
            <a   style={{textDecoration:"none"}} href="" className="mx-4">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            <a  style={{textDecoration:"none"}} href="">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
