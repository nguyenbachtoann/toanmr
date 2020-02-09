const TITLE = "HELLO, I'M NGUYEN BACH TOAN";
const CONTENT =
  "This site was built on personal targets, I just want to practice my coding skills";
const CONTACT = "Social networks";
const BUTTON_HOME = [
  {
    name: "Facebook",
    icon: "facebook"
  },
  {
    name: "Instagram",
    icon: "instagram"
  },
  {
    name: "Github",
    icon: "github"
  }
];

const BUTTON_INFORMATION_LINK = {
  facebook: "https://www.facebook.com/toan.nguyenbach",
  instagram: "https://www.instagram.com/imyourcoffee/",
  github: "https://github.com/bachtoan?tab=repositories"
};

const HOBBIES = [
  {
    content: "Programing",
    src: require("../assets/images/hobby1.jpg")
  },
  {
    content: "Music",
    src: require("../assets/images/hobby2.jpg")
  },
  {
    content: "Technology",
    src: require("../assets/images/hobby3.jpg")
  }
];

const WEATHER_KEY = "56bed0188ffd85afaaccf05125c25438";
const WEATHER_URL_ASSET = "https://openweathermap.org/img/wn/";

const GOGGLE_KEY = "AIzaSyC9Fy6g084M-N4ike7gEMMOpKqvJ7cRMhc";

const YOUTUBE_API_PLAYLIST_ID = "PLqeSJS3N5tzhPp3SkqKJm9rdCZu69Z1_7";
const YOUTUBE_API_MAX_RESULT = 50;

const YOUTUBE_PLAYLIST_SRC =
  "https://www.youtube.com/embed/videoseries?list=PLqeSJS3N5tzhPp3SkqKJm9rdCZu69Z1_7&autoplay=1";
const CELCIUS_ICON = "&deg;";

const DATE_NAME = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const FULLPAGE_IMG_LOADING = require("../assets/images/loading.gif");

const TODOS_PRIORITY = [
  {
    name: "Low",
    color: "green"
  },
  {
    name: "Medium",
    color: "orange"
  },
  {
    name: "High",
    color: "red"
  }
];

const TODO_BUTTON_OPTIONS = [
  {
    name: "Add to do",
    buttonType: "primary",
    iconType: "plus"
  },
  {
    name: "Delete to do",
    buttonType: "danger",
    iconType: "minus"
  }
];

const TASKBOX_EDITOR_BUTTONS = [

  {
    name: "Edit",
    buttonType: "default",
    iconType:"edit"
  },
];

export const VALIDATION_MESSAGES = {
  accepted: 'The :attribute must be accepted.',
  after: 'The :attribute must be after :date.',
  after_or_equal: 'The :attribute must be after or on :date.',
  alpha: 'Trường này chỉ được nhập chữ.',
  alpha_space: 'The :attribute may only contain letters and spaces.',
  alpha_num: 'The :attribute may only contain letters and numbers.',
  alpha_num_space: 'The :attribute may only contain letters, numbers, and spaces.',
  alpha_num_dash: 'The :attribute may only contain letters, numbers, and dashes.',
  alpha_num_dash_space: 'The :attribute may only contain letters, numbers, dashes, and spaces.',
  array: 'The :attribute must be an array.',
  before: 'The :attribute must be before :date.',
  before_or_equal: 'The :attribute must be before or on :date.',
  between: 'The :attribute must be between :min and :max:type.',
  boolean: 'The :attribute must be a boolean.',
  card_exp: 'The :attribute must be a valid expiration date.',
  card_num: 'The :attribute must be a valid credit card number.',
  currency: 'The :attribute must be a valid currency.',
  date: 'The :attribute must be a date.',
  date_equals: 'The :attribute must be on :date.',
  email: 'Xin hãy nhập email đúng format abc@xyz.com.',
  in: 'The selected :attribute must be :values.',
  integer: 'Xin hãy nhập số.',
  max: 'Độ dài không thể lớn hơn :max.',
  min: 'Độ dài không thể nhỏ hơn :min.',
  not_in: 'The selected :attribute must not be :values.',
  not_regex: 'The :attribute must not match the required pattern.',
  numeric: 'The :attribute must be a number.',
  phone: 'Trường này phải là số điện thoại',
  regex: 'The :attribute must match the required pattern.',
  required: 'Trường này không thể bỏ trống.',
  size: 'The :attribute must be :size:type.',
  string: 'The :attribute must be a string.',
  typeof: 'The :attribute is not the correct type of :type.',
  url: 'The :attribute must be a url.',
}



const Constants = {
  TITLE,
  CONTENT,
  BUTTON_HOME,
  BUTTON_INFORMATION_LINK,
  CONTACT,
  HOBBIES,
  WEATHER_KEY,
  CELCIUS_ICON,
  GOGGLE_KEY,
  YOUTUBE_API_PLAYLIST_ID,
  YOUTUBE_API_MAX_RESULT,
  DATE_NAME,
  FULLPAGE_IMG_LOADING,
  WEATHER_URL_ASSET,
  YOUTUBE_PLAYLIST_SRC,
  TODOS_PRIORITY,
  TODO_BUTTON_OPTIONS,
  TASKBOX_EDITOR_BUTTONS,
  VALIDATION_MESSAGES
};

export default Constants;
