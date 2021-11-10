import React from "react";
import Link from "next/link";

// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
//import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Terms() {
  return (
    <>
      <IndexNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    This is a simple example of a Landing Page you can build
                    using Notus NextJS. It features multiple CSS components
                    based on the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-10/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h2 className="text-2xl font-semibold">PRIVACY</h2>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <h3>Last updated October 01, 2021</h3>
                      <p>
                        Thank you for choosing to be part of our community at
                        LXT GROUP, doing business as Lexington (“Lexington,”
                        “we,” “us,” or “our“). We are committed to protecting
                        your personal information and your right to privacy. If
                        you have any questions or concerns about this privacy
                        notice or our practices with regard to your personal
                        information, please contact us at info@lxtgroup.nft.
                      </p>
                      <p>
                        This privacy notice describes how we might use your
                        information if you:
                      </p>
                      <ul>
                        <li>Visit our website at https://www.lxtgroup.nft</li>
                        <li>
                          Engage with us in other related ways ― including any
                          sales, marketing, or events
                        </li>
                      </ul>
                      <p>In this privacy notice, if we refer to:</p>
                      <ul>
                        <li>
                          {" "}
                          “Website,” we are referring to any website of ours
                          that references or links to this policy
                        </li>
                        <li>
                          “Services,” we are referring to our Website, and other
                          related services, including any sales, marketing, or
                          events
                        </li>
                      </ul>
                      <p>
                        The purpose of this privacy notice is to explain to you
                        in the clearest way possible what information we
                        collect, how we use it, and what rights you have in
                        relation to it. If there are any terms in this privacy
                        notice that you do not agree with, please discontinue
                        use of our Services immediately.
                      </p>
                      <p>
                        Please read this privacy notice carefully, as it will
                        help you understand what we do with the information that
                        we collect.
                      </p>
                      <h3>TABLE OF CONTENTS</h3>
                      <ul>
                        <li>1. WHAT INFORMATION DO WE COLLECT?</li>
                        <li>2. HOW DO WE USE YOUR INFORMATION?</li>
                        <li>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>
                        <li>
                          4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                        </li>
                        <li>5. HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                        <li>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                        <li>7. DO WE COLLECT INFORMATION FROM MINORS?</li>
                        <li>8. WHAT ARE YOUR PRIVACY RIGHTS?</li>
                        <li>9. CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                        <li>
                          10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY
                          RIGHTS?
                        </li>
                        <li>11. DO WE MAKE UPDATES TO THIS NOTICE?</li>
                        <li>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                        <li>
                          13. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE
                          COLLECT FROM YOU?
                        </li>
                      </ul>
                      <h3>1. WHAT INFORMATION DO WE COLLECT?</h3>
                      <h4>Personal information you disclose to us</h4>
                      <p>
                        In Short: We collect personal information that you
                        provide to us.
                      </p>
                      <p>
                        We collect personal information that you voluntarily
                        provide to us when you express an interest in obtaining
                        information about us or our products and Services, when
                        you participate in activities on the Website or
                        otherwise when you contact us.
                      </p>
                      <p>
                        The personal information that we collect depends on the
                        context of your interactions with us and the Website,
                        the choices you make and the products and features you
                        use. The personal information we collect may include the
                        following:
                      </p>
                      <h4>Personal Information Provided by You. </h4>
                      <p>
                        We collect names; phone numbers; email addresses; job
                        titles; contact preferences; and other similar
                        information.
                      </p>
                      <p>
                        All personal information that you provide to us must be
                        true, complete and accurate, and you must notify us of
                        any changes to such personal information.
                      </p>
                      <h3>2. HOW DO WE USE YOUR INFORMATION?</h3>
                      <p>
                        In Short: We process your information for purposes based
                        on legitimate business interests, the fulfillment of our
                        contract with you, compliance with our legal
                        obligations, and/or your consent.
                      </p>
                      <p>
                        We use personal information collected via our Website
                        for a variety of business purposes described below. We
                        process your personal information for these purposes in
                        reliance on our legitimate business interests, in order
                        to enter into or perform a contract with you, with your
                        consent, and/or for compliance with our legal
                        obligations. We indicate the specific processing grounds
                        we rely on next to each purpose listed below.
                      </p>
                      <p>We use the information we collect or receive:</p>
                      <ul>
                        <li>
                          Fulfill and manage your orders. We may use your
                          information to fulfill and manage your orders,
                          payments, returns, and exchanges made through the
                          Website.
                        </li>
                        <li>
                          Administer prize draws and competitions. We may use
                          your information to administer prize draws and
                          competitions when you elect to participate in our
                          competitions.
                        </li>

                        <li>
                          To deliver and facilitate delivery of services to the
                          user. We may use your information to provide you with
                          the requested service.
                        </li>

                        <li>
                          To respond to user inquiries/offer support to users.
                          We may use your information to respond to your
                          inquiries and solve any potential issues you might
                          have with the use of our Services.
                        </li>
                        <li>
                          To send you marketing and promotional communications.
                          We and/or our third-party marketing partners may use
                          the personal information you send to us for our
                          marketing purposes, if this is in accordance with your
                          marketing preferences. For example, when expressing an
                          interest in obtaining information about us or our
                          Website, subscribing to marketing or otherwise
                          contacting us, we will collect personal information
                          from you. You can opt-out of our marketing emails at
                          any time <br />
                          (see the “WHAT ARE YOUR PRIVACY RIGHTS?” below).
                        </li>
                        <li>
                          Deliver targeted advertising to you. We may use your
                          information to develop and display personalized
                          content and advertising (and work with third parties
                          who do so) tailored to your interests and/or location
                          and to measure its effectiveness.
                        </li>
                      </ul>
                      <h3>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h3>
                      <p>
                        In Short: We only share information with your consent,
                        to comply with laws, to provide you with services, to
                        protect your rights, or to fulfill business obligations.
                      </p>
                      <p>
                        We may process or share your data that we hold based on
                        the following legal basis:
                      </p>
                      <ul>
                        <li>
                          Consent: We may process your data if you have given us
                          specific consent to use your personal information for
                          a specific purpose.
                        </li>
                        <li>
                          Legitimate Interests: We may process your data when it
                          is reasonably necessary to achieve our legitimate
                          business interests.
                        </li>
                        <li>
                          Performance of a Contract: Where we have entered into
                          a contract with you, we may process your personal
                          information to fulfill the terms of our contract.
                        </li>
                        <li>
                          Legal Obligations: We may disclose your information
                          where we are legally required to do so in order to
                          comply with applicable law, governmental requests, a
                          judicial proceeding, court order, or legal process,
                          such as in response to a court order or a subpoena
                          (including in response to public authorities to meet
                          national security or law enforcement requirements).
                        </li>
                        <li>
                          Vital Interests: We may disclose your information
                          where we believe it is necessary to investigate,
                          prevent, or take action regarding potential violations
                          of our policies, suspected fraud, situations involving
                          potential threats to the safety of any person and
                          illegal activities, or as evidence in litigation in
                          which we are involved.
                        </li>
                      </ul>
                      <p>
                        More specifically, we may need to process your data or
                        share your personal information in the following
                        situations:
                      </p>
                      <ul>
                        <li>
                          Business Transfers. We may share or transfer your
                          information in connection with, or during negotiations
                          of, any merger, sale of company assets, financing, or
                          acquisition of all or a portion of our business to
                          another company.
                        </li>
                      </ul>
                      <h3>
                        4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                      </h3>
                      <p>
                        In Short: We may use cookies and other tracking
                        technologies to collect and store your information.
                      </p>
                      <p>
                        We may use cookies and similar tracking technologies
                        (like web beacons and pixels) to access or store
                        information. Specific information about how we use such
                        technologies and how you can refuse certain cookies is
                        set out in our Cookie Notice.
                      </p>
                      <h3>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
                      <p>
                        In Short: We keep your information for as long as
                        necessary to fulfill the purposes outlined in this
                        privacy notice unless otherwise required by law.
                      </p>
                      <p>
                        We will only keep your personal information for as long
                        as it is necessary for the purposes set out in this
                        privacy notice, unless a longer retention period is
                        required or permitted by law (such as tax, accounting or
                        other legal requirements). No purpose in this notice
                        will require us keeping your personal information for
                        longer than 1 year.
                      </p>
                      <p>
                        When we have no ongoing legitimate business need to
                        process your personal information, we will either delete
                        or anonymize such information, or, if this is not
                        possible (for example, because your personal information
                        has been stored in backup archives), then we will
                        securely store your personal information and isolate it
                        from any further processing until deletion is possible.
                      </p>
                      <h3>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
                      <p>
                        In Short: We aim to protect your personal information
                        through a system of organizational and technical
                        security measures.
                      </p>
                      <p>
                        We have implemented appropriate technical and
                        organizational security measures designed to protect the
                        security of any personal information we process.
                        However, despite our safeguards and efforts to secure
                        your information, no electronic transmission over the
                        Internet or information storage technology can be
                        guaranteed to be 100% secure, so we cannot promise or
                        guarantee that hackers, cybercriminals, or other
                        unauthorized third parties will not be able to defeat
                        our security, and improperly collect, access, steal, or
                        modify your information. Although we will do our best to
                        protect your personal information, transmission of
                        personal information to and from our Website is at your
                        own risk. You should only access the Website within a
                        secure environment.
                      </p>
                      <h3>7. DO WE COLLECT INFORMATION FROM MINORS?</h3>
                      <p>
                        In Short: We do not knowingly collect data from or
                        market to children under 18 years of age.
                      </p>
                      <p>
                        We do not knowingly solicit data from or market to
                        children under 18 years of age. By using the Website,
                        you represent that you are at least 18 or that you are
                        the parent or guardian of such a minor and consent to
                        such minor dependent’s use of the Website. If we learn
                        that personal information from users less than 18 years
                        of age has been collected, we will deactivate the
                        account and take reasonable measures to promptly delete
                        such data from our records. If you become aware of any
                        data we may have collected from children under age 18,
                        please contact us at info@lxtgroup.nft.
                      </p>
                      <h3>8. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
                      <p>
                        In Short: You may review, change, or terminate your
                        account at any time.
                      </p>
                      <p>
                        If you are a resident in the EEA or UK and you believe
                        we are unlawfully processing your personal information,
                        you also have the right to complain to your local data
                        protection supervisory authority. You can find their
                        contact details here:
                        https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
                      </p>
                      <p>
                        If you are a resident in Switzerland, the contact
                        details for the data protection authorities are
                        available here:
                        https://www.edoeb.admin.ch/edoeb/en/home.html.
                      </p>
                      <p>
                        Cookies and similar technologies: Most Web browsers are
                        set to accept cookies by default. If you prefer, you can
                        usually choose to set your browser to remove cookies and
                        to reject cookies. If you choose to remove cookies or
                        reject cookies, this could affect certain features or
                        services of our Website. To opt-out of interest-based
                        advertising by advertisers on our Website visit
                        http://www.aboutads.info/choices/.
                      </p>
                      <h3>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
                      <p>
                        Most web browsers and some mobile operating systems and
                        mobile applications include a Do-Not-Track (“DNT”)
                        feature or setting you can activate to signal your
                        privacy preference not to have data about your online
                        browsing activities monitored and collected. At this
                        stage no uniform technology standard for recognizing and
                        implementing DNT signals has been finalized. As such, we
                        do not currently respond to DNT browser signals or any
                        other mechanism that automatically communicates your
                        choice not to be tracked online. If a standard for
                        online tracking is adopted that we must follow in the
                        future, we will inform you about that practice in a
                        revised version of this privacy notice.{" "}
                      </p>
                      <h3>
                        10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY
                        RIGHTS?
                      </h3>
                      <p>
                        In Short: Yes, if you are a resident of California, you
                        are granted specific rights regarding access to your
                        personal information.
                      </p>
                      <p>
                        California Civil Code Section 1798.83, also known as the
                        “Shine The Light” law, permits our users who are
                        California residents to request and obtain from us, once
                        a year and free of charge, information about categories
                        of personal information (if any) we disclosed to third
                        parties for direct marketing purposes and the names and
                        addresses of all third parties with which we shared
                        personal information in the immediately preceding
                        calendar year. If you are a California resident and
                        would like to make such a request, please submit your
                        request in writing to us using the contact information
                        provided below.
                      </p>
                      <p>
                        If you are under 18 years of age, reside in California,
                        and have a registered account with the Website, you have
                        the right to request removal of unwanted data that you
                        publicly post on the Website. To request removal of such
                        data, please contact us using the contact information
                        provided below, and include the email address associated
                        with your account and a statement that you reside in
                        California. We will make sure the data is not publicly
                        displayed on the Website, but please be aware that the
                        data may not be completely or comprehensively removed
                        from all our systems (e.g. backups, etc.).
                      </p>
                      <h3>CCPA Privacy Notice</h3>
                      <p>
                        The California Code of Regulations defines a “resident”
                        as:
                      </p>
                      <ul>
                        <li>
                          (1) every individual who is in the State of California
                          for other than a temporary or transitory purpose and
                        </li>
                        <li>
                          (2) every individual who is domiciled in the State of
                          California who is outside the State of California for
                          a temporary or transitory purpose
                        </li>
                      </ul>
                      <p>
                        All other individuals are defined as “non-residents.”
                      </p>
                      <p>
                        If this definition of “resident” applies to you, we must
                        adhere to certain rights and obligations regarding your
                        personal information.
                      </p>
                      <p>
                        What categories of personal information do we collect?
                      </p>
                      <p>
                        We have collected the following categories of personal
                        information in the past twelve (12) months:
                      </p>
                      <p>Insert table here</p>
                      <p>
                        We may also collect other personal information outside
                        of these categories instances where you interact with us
                        in-person, online, or by phone or mail in the context
                        of:
                      </p>
                      <ul>
                        <li>
                          Receiving help through our customer support channels;
                        </li>
                        <li>
                          Participation in customer surveys or contests; and
                        </li>
                        <li>
                          Facilitation in the delivery of our Services and to
                          respond to your inquiries.
                        </li>
                      </ul>
                      <p>How do we use and share your personal information?</p>
                      <p>
                        More information about our data collection and sharing
                        practices can be found in this privacy notice.
                      </p>
                      <p>
                        You may contact us by email at info@lxtgroup.nft, by
                        visiting https://lxtgroup.nft/contact, or by referring
                        to the contact details at the bottom of this document.
                      </p>
                      <p>
                        If you are using an authorized agent to exercise your
                        right to opt-out we may deny a request if the authorized
                        agent does not submit proof that they have been validly
                        authorized to act on your behalf.
                      </p>
                      <p>Will your information be shared with anyone else?</p>
                      <p>
                        We may disclose your personal information with our
                        service providers pursuant to a written contract between
                        us and each service provider. Each service provider is a
                        for-profit entity that processes the information on our
                        behalf.
                      </p>
                      <p>
                        We may use your personal information for our own
                        business purposes, such as for undertaking internal
                        research for technological development and
                        demonstration. This is not considered to be “selling” of
                        your personal data.
                      </p>
                      <p>
                        LXT GROUP has not disclosed or sold any personal
                        information to third parties for a business or
                        commercial purpose in the preceding 12 months. Lexington
                        Tech will not sell personal information in the future
                        belonging to website visitors, users and other
                        consumers.
                      </p>
                      <h4>Your rights with respect to your personal data</h4>
                      <h5>
                        Right to request deletion of the data – Request to
                        delete
                      </h5>
                      You can ask for the deletion of your personal information.
                      If you ask us to delete your personal information, we will
                      respect your request and delete your personal information,
                      subject to certain exceptions provided by law, such as
                      (but not limited to) the exercise by another consumer of
                      his or her right to free speech, our compliance
                      requirements resulting from a legal obligation or any
                      processing that may be required to protect against illegal
                      activities.
                      <h5>Right to be informed – Request to know</h5>
                      <p>
                        Depending on the circumstances, you have a right to
                        know:
                      </p>
                      <ul>
                        <li>
                          whether we collect and use your personal information;
                        </li>
                        <li>
                          the categories of personal information that we
                          collect;
                        </li>
                        <li>
                          the purposes for which the collected personal
                          information is used;
                        </li>
                        <li>
                          whether we sell your personal information to third
                          parties;
                        </li>
                        <li>
                          the categories of personal information that we sold or
                          disclosed for a business purpose;
                        </li>
                        <li>
                          the categories of third parties to whom the personal
                          information was sold or disclosed for a business
                          purpose; and
                        </li>
                        <li>
                          the business or commercial purpose for collecting or
                          selling personal information.
                        </li>
                      </ul>
                      <p>
                        In accordance with applicable law, we are not obligated
                        to provide or delete consumer information that is
                        de-identified in response to a consumer request or to
                        re-identify individual data to verify a consumer
                        request.
                      </p>
                      <h5>
                        Right to Non-Discrimination for the Exercise of a
                        Consumer’s Privacy Rights
                      </h5>
                      <p>
                        We will not discriminate against you if you exercise
                        your privacy rights.
                      </p>
                      <h5>Verification process</h5>
                      <p>
                        Upon receiving your request, we will need to verify your
                        identity to determine you are the same person about whom
                        we have the information in our system. These
                        verification efforts require us to ask you to provide
                        information so that we can match it with information you
                        have previously provided us. For instance, depending on
                        the type of request you submit, we may ask you to
                        provide certain information so that we can match the
                        information you provide with the information we already
                        have on file, or we may contact you through a
                        communication method (e.g. phone or email) that you have
                        previously provided to us. We may also use other
                        verification methods as the circumstances dictate.
                      </p>
                      <p>
                        We will only use personal information provided in your
                        request to verify your identity or authority to make the
                        request. To the extent possible, we will avoid
                        requesting additional information from you for the
                        purposes of verification. If, however, we cannot verify
                        your identity from the information already maintained by
                        us, we may request that you provide additional
                        information for the purposes of verifying your identity,
                        and for security or fraud-prevention purposes. We will
                        delete such additionally provided information as soon as
                        we finish verifying you.
                      </p>
                      <h5>Other privacy rights</h5>
                      <ul>
                        <li>
                          you may object to the processing of your personal
                          data.
                        </li>
                        <li>
                          you may request correction of your personal data if it
                          is incorrect or no longer relevant, or ask to restrict
                          the processing of the data.
                        </li>
                        <li>
                          you can designate an authorized agent to make a
                          request under the CCPA on your behalf. We may deny a
                          request from an authorized agent that does not submit
                          proof that they have been validly authorized to act on
                          your behalf in accordance with the CCPA.
                        </li>
                        <li>
                          you may request to opt-out from future selling of your
                          personal information to third parties. Upon receiving
                          a request to opt-out, we will act upon the request as
                          soon as feasibly possible, but no later than 15 days
                          from the date of the request submission.
                        </li>
                      </ul>
                      <p>
                        To exercise these rights, you can contact us by email at
                        info@lxtgroup.nft, by visiting
                        https://lxtgroup.nft/contact, or by referring to the
                        contact details at the bottom of this document. If you
                        have a complaint about how we handle your data, we would
                        like to hear from you.{" "}
                      </p>
                      <h3>11. DO WE MAKE UPDATES TO THIS NOTICE? </h3>
                      <p>
                        In Short: Yes, we will update this notice as necessary
                        to stay compliant with relevant laws.
                      </p>
                      <p>
                        We may update this privacy notice from time to time. The
                        updated version will be indicated by an updated
                        “Revised” date and the updated version will be effective
                        as soon as it is accessible. If we make material changes
                        to this privacy notice, we may notify you either by
                        prominently posting a notice of such changes or by
                        directly sending you a notification. We encourage you to
                        review this privacy notice frequently to be informed of
                        how we are protecting your information.
                      </p>
                      <h3>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? </h3>
                      <p>
                        If you have questions or comments about this notice, you
                        may email us at info@lxtgroup.nft or by post to:
                      </p>
                      <ul>
                        <li>LXT GROUP</li>
                        <li>16192 Coastal Highway</li>
                        <li>Lewes, DE 19958</li>
                        <li>United States</li>
                      </ul>
                      <h3>
                        13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                        COLLECT FROM YOU?{" "}
                      </h3>
                      <p>
                        Based on the applicable laws of your country, you may
                        have the right to request access to the personal
                        information we collect from you, change that
                        information, or delete it in some circumstances. To
                        request to review, update, or delete your personal
                        information, please submit a request form by clicking
                        here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}