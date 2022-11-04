import React, { Fragment } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import styles from "./Integration.module.css";
const Integration = () => {
  return (
    <>
      <Navbar />

      <div className={styles.integration}>

        {/* <nav></nav> */}
        <div className={styles.header}>
          <div className={styles.row}>
            <div className={styles.col_12}>
              <h2>
                TRACKING TIME BUTTON FOR CHROME
              </h2>
              <h1>
                Tracking Time <br /> Integrations
              </h1>
              <h2>TIME TRACKING INTEGRATIONS THAT YOU'LL LOVE</h2>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.row_search}>
            <div className={styles.input}>
              <input
                type="text"
                placeholder="SEARCH YOUR FAVOURITE APP!"
                className={styles.gsearch}
              />
            </div>
          </div>

          <div className={styles.summary}>
            <article>
              <p>
                <br />
                Improve your time tracking and increase your productivity with
                these Integrations.
                <br />
                See how much time you spend on each task or project!
                TrackingTime's integrations make it easy to keep track of your
                billable and non-billable tasks by integrating with more than 30
                apps.
              </p>
              <br/>
              <p>
                TrackingTime can be integrated with other apps, such as project
                management, accounting, and customer support. Get instant timesheets and analytics
                with TrackingTime!
              </p>
            </article>
          </div>

          <div className={styles.cards}>
            <div className={styles.row}>
              {items.map((item) => {
                return (
                  <div className={styles.card}>
                    <div className={styles.cardImg}>
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <h2 className={styles.title}>{item.title}</h2>
                    <p className={styles.desc}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.parts}>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/phone.png"
              alt=""
            />
            <div className={styles.sec_right}>
              <h1>Track Everywhere</h1>
              <p>
                Track your time everywhere you work with our mobile apps
                for iOS and Android.
              </p>
              <div className={styles.stores}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/playstore.png"
                  alt=""
                />
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/apstore.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Integration;
/**
* feedback: fw16_644, fw17_0513, fw18_0042 - export the static data to constant files or JSON file
* It will segregate the data and view
*/
const items = [
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/airtable.png",
    title: "Airtable",
    desc: "Powerful organizational spreadsheets that works exactly the way you want.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/anydo.png",
    title: "Any.Do",
    desc: "Any.Do helps you get things done with your friends in a simple & elegant way.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/asana.png",
    title: "Asana",
    desc: "Asana puts tasks and conversations together to enable teamwork without email.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/azendoo.png",
    title: "Azendoo",
    desc: "Simplifies projects planning, documents sharing and teamwork synchronization for both your professional activity and your life.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/azure-devops.png",
    title: "Azure DevOps",
    desc: "Continuous Delivery Services for teams to share code, track work, and ship software.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/basecamp-2.png",
    title: "Basecamp 2",
    desc: "Basecamp is a web-based project collaboration tool that allows groups of people to share files.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/basecamp-3.png",
    title: "Basecamp 3",
    desc: "Basecamp 3 is a web-based project collaboration tool that allows groups of people to share files.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/bitbucket.png",
    title: "Bitbucket",
    desc: "Bitbucket is a code hosting site, for the Git and Mercurial version control systems.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/clickup-time-tracking.png",
    title: "Clickup",
    desc: "Docs, Reminders, Goals, Calendars, Chat, scheduling and more.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/coda-time-tracking.png",
    title: "Coda",
    desc: "Coda blends the flexibility of a document, the power of a spreadsheet.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/dixa-time-tracking.png",
    title: "Dixa",
    desc: "Customer service platform that unifies phone, email, chat and messaging apps.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/evernote-time-tracking.png",
    title: "Evernote",
    desc: "Create documents, collaborate on projects, and store information all in one place.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/favro.png",
    title: "Favro",
    desc: "Balance power and simplicity in the ideal collaboration app for developers.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/figma-time-tracking.png",
    title: "Figma",
    desc: "Cloud-based platform that enables businesses to create custom designs.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/flow.svg",
    title: "Flow",
    desc: "Manage tasks, share files, have discussions, and capture ideas all in one place.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/freshdesk.png",
    title: "Freshdesk",
    desc: "Freshdesk is an award-winning, online help desk software that allows you to support customers.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/github.png",
    title: "Github",
    desc: "GitHub is a web-based hosting service for projects that use the Git revision control system.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/gitlab.png",
    title: "Gitlab",
    desc: "GitLab is a on-premise or hosted Git repository management tool",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/ring-central-time-tracking.png",
    title: "Ring Central",
    desc: "Conversation platform for teams to plan, share & organize work tasks.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/gmail.png",
    title: "Gmail",
    desc: "Gmail is a free search-based web-mail service by Google.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/google-calendar.png",
    title: "Google Calendar",
    desc: "With Google Calendar, its easy to keep track of all your lifes important events in one place.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/gdocs.png",
    title: "Google Docs",
    desc: "Google Docs is an online word processor, part of Google Drive.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/gsheets.png",
    title: "Google Sheets",
    desc: "Google Sheets is an online spreadsheet app that lets you create and format spreadsheets.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/google-drive.png",
    title: "Google Slides",
    desc: "Google Slides is a presentation app offered by Google.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/gtasks.png",
    title: "Google Tasks",
    desc: "Tasks adds a to-do list to Gmail.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/google-chat.png",
    title: "Google Chat",
    desc: "Collaborate on Google chat",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/google-workspace.png",
    title: "Google Workspace",
    desc: "Google Workspace consists of Gmail, Contacts, Calendar, Meet and Chat for communication.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/insightly.png",
    title: "Insightly",
    desc: "Web-based project and Customer Relationship Management (CRM) application.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/jira.png",
    title: "Jira",
    desc: "JIRA is the leading bug tracking, issue tracking and project management tool.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/linear-time-tracking.png",
    title: "Linear",
    desc: "The issue tracking tool you'll enjoy using.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/meistertask-time-tracking.png",
    title: "Meistertask",
    desc: "Collaboration and task management tool on the web.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/microsoft-to-do.png",
    title: "Microsoft To Do",
    desc: "Microsoft To Do is a task management app to help you stay organized and manage your day-to-day.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/microsoft-planner.png",
    title: "Microsoft Planner",
    desc: "Microsoft Planner lets you easily bring together teams, tasks, documents, and conversations for better results.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/monday.png",
    title: "Monday",
    desc: "Monday is a project management tool your team will actually enjoy using.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/nifty-time-tracking.png",
    title: "Nifty",
    desc: "Task management app to manage tasks, timelines and docs.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/notion.png",
    title: "Notion",
    desc: "Notion is the all-in-one workspace for notes, project management, documents, and collaboration.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/outlook.png",
    title: "Outlook.Com",
    desc: "Outlook.com is a webmail service from Microsoft, successor of Hotmail.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/podio.png",
    title: "Podio",
    desc: "Podio lets you build and shape the online workplace most fitting to your role.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/redbooth.png",
    title: "Redbooth",
    desc: "Redbooth (formerly Teambox), the cloud-based company redefining collaboration and busines communications.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/redmine.png",
    title: "Redmine",
    desc: "Online project management software built on the Ruby on Rails framework specifically for small groups.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/remember-the-milk.png",
    title: "Remember The Milk",
    desc: "Take your tasks anywhere with this feature-packed application.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/smartsheet.png",
    title: "Smartsheet",
    desc: "Smartsheet is a web-based project and task management and work collaboration software.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/slack.png",
    title: "Slack",
    desc: "Slack brings all your communication together in one place.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/SupportPal.png",
    title: "Supportal",
    desc: "Powerful self-hosted help desk solution that is simple and intuitive to use.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/taskade.png",
    title: "Taskade",
    desc: "Taskade is reimagining the to-do list by making it visual, structured, and collaborative.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/teams.png",
    title: "Microsoft Teams",
    desc: "Microsoft Teams is the chat-based workspace that integrates all the people, content, and tools your team needs.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/teamwork-time-tracking.png",
    title: "Teamwork",
    desc: "Teamwork is project management software.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/ticktick.png",
    title: "Tick Tick",
    desc: "Your daily must-have to-do & task list to make all things done and get life well organized.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/todoist.png",
    title: "Todoist",
    desc: "Todoist is a task manager thats useful, fast and easy to use.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/trello.png",
    title: "Trello",
    desc: "Trello is a collaboration tool that organizes your projects into boards.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/zendesk.png",
    title: "Zendesk",
    desc: "Offers on-demand help desk software, covering customer support, trouble tickets and knowledge base.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/activecollab-time-tracking.png",
    title: "Activecollab",
    desc: "Project Management Tool in the Office & Productivity category.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/agiled-time-tracking.png",
    title: "Agiled",
    desc: "Project Management software.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/assembla-time-tracking.png",
    title: "Assembla",
    desc: "Online workspaces with best of breed tools like Tasks & Issue Management, SVN & Git Repositories.",
  },
  {
    icon: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/button/axosoft-time-tracking.png",
    title: "Axosoft",
    desc: "Agile based projecment management software.",
  },
];
